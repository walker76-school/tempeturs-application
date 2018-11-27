package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.appointment.AppointmentDto;
import petfinder.site.common.appointment.AppointmentService;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping(value = "/api/appointment")
public class AppointmentEndpoint {
    @Autowired
    private UserService userService;

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping(value = "/findSitters/{zip}", produces = "application/json")
    public List<UserDto> find(@PathVariable(name="zip") String zip) {
        return userService.findSitters(zip);
    }

    // when do we call this in js generate list of correct sitters
    @GetMapping(value = "/findSitters/{addressLine}/{city}/{state}/{zip}", produces = "application/json")
    public List<UserDto> find(@PathVariable(name = "addressLine") String addressLine,@PathVariable(name="city") String city, @PathVariable(name="state") String state, @PathVariable(name="zip") String zip) {
        return userService.findSitters(addressLine, city, state, zip);
    }

    @GetMapping(value = "/findSitters/{zip}/{date}", produces = "application/json")
    public List<UserDto> registerSitter(@PathVariable(name="zip") String zip, @PathVariable("date") String date) {
        return userService.findSittersByDate(zip, date);
    }

    @GetMapping(value = "/rating", produces = "application/json")
    public Integer getUserRating() {
        int total = 0;
        int sum = 0;
        String principal = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<UserDto> userDtoOptional = userService.findUserByPrincipal(principal);
        if(userDtoOptional.isPresent()){
            UserDto userDto = userDtoOptional.get();
            for(Long appointmentId : userDto.getAppointments()){
                Optional<AppointmentDto> appointmentDtoOptional = appointmentService.findAppointment(appointmentId);
                if(appointmentDtoOptional.isPresent()){
                    AppointmentDto appointmentDto = appointmentDtoOptional.get();
                    if(appointmentDto.getRating() != -1 && principal.equals(appointmentDto.getSitter())){
                        sum += appointmentDto.getRating();
                        total++;
                    }
                }
            }
        }

        return total != 0 ? (sum / total) : -1;
    }

    @PostMapping(value = "/makeAppointment", produces = "application/json")
    public AppointmentDto makeAppointment(@RequestBody AppointmentService.AppointmentRequest request) {
        Integer id = generateUniqueId();
        AppointmentDto appointment = new AppointmentDto(id.longValue(), request.getOwner(), request.getSitter(), request.getPetIds(), request.getStartDate(), request.getEndDate());
        appointmentService.save(appointment);
        userService.makeAppointment(request.getOwner(), request.getSitter(), id.longValue());
        return appointment;
    }

    @GetMapping(value = "/getAppointment/{id}", produces = "application/json")
    public Optional<AppointmentDto> getAppointment(@PathVariable(name="id") Long id) {
        return appointmentService.findAppointment(id);
    }

    @PostMapping(value = "/approveAppointment/{id}", produces = "application/json")
    public void approveAppointment(@PathVariable(name="id") Long id) {
        appointmentService.approveAppointment(id);
    }

    @PostMapping(value = "/rejectAppointment/{id}", produces = "application/json")
    public void rejectAppointment(@PathVariable(name="id") Long id) {
        appointmentService.rejectAppointment(id);
    }

    @PostMapping(value = "/cancelAppointment/{id}", produces = "application/json")
    public void cancelAppointment(@PathVariable(name="id") Long id) {
        appointmentService.cancelAppointment(id);
    }

    @PostMapping(value = "/rateAppointment/{id}/{rating}", produces = "application/json")
    public void rateAppointment(@PathVariable(name="id") Long id, @PathVariable(name = "rating") Integer rating) {
        if(rating >= 0 && rating <= 5){
            appointmentService.rateAppointment(id, rating);
        }
    }

    private Integer generateUniqueId()
    {
        int val = -1;

        do {
            val = new Random().nextInt(200000);
        } while (val < 0);

        return val;
    }
}
