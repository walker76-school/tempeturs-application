package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(value = "/api/appointment")
public class AppointmentEndpoint {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/findSitters/{zip}", produces = "application/json")
    public List<UserDto> find(@PathVariable(name="zip") String zip) {
        return userService.findSitters(zip);
    }

    @GetMapping(value = "/findSitters/{zip}/{date}", produces = "application/json")
    public List<UserDto> registerSitter(@PathVariable(name="zip") String zip, @PathVariable("date") String date) {
        return userService.findSittersByDate(zip, date);
    }

    @PostMapping(value = "/makeAppointment/{owner}/{sitter}/{petId}", produces = "application/json")
    public void makeAppointment(@PathVariable(name="owner") String ownerPrincipal,
                                @PathVariable("sitter") String sitterPrincipal,
                                @PathVariable("petId") Long petId) {
        userService.makeAppointment(ownerPrincipal, sitterPrincipal, petId);
    }

    @PostMapping(value = "/approveAppointment/{owner}/{sitter}/{petId}", produces = "application/json")
    public void approveAppointment(@PathVariable(name="owner") String ownerPrincipal,
                                @PathVariable("sitter") String sitterPrincipal,
                                @PathVariable("petId") Long petId) {
        userService.approveAppointment(ownerPrincipal, sitterPrincipal, petId);
    }
}
