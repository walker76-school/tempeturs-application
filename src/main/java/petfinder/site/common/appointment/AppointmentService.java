package petfinder.site.common.appointment;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDao;
import petfinder.site.common.pet.PetDto;
import petfinder.site.common.user.UserAuthenticationDto;
import petfinder.site.common.user.UserDao;

/**
 * Created by awalker on 11/5/2018.
 */
@Service
public class AppointmentService {

    @Autowired
    private AppointmentDao appointmentDao;

    @Autowired
    private UserDao userDao;

    public Optional<AppointmentDto> findAppointment(Long id) {
        return appointmentDao.findAppointment(id);
    }

    public void approveAppointment(Long id) {
        appointmentDao.approve(id);
    }

    public void rejectAppointment(Long id) {
        appointmentDao.reject(id);
    }

    public void rateAppointment(Long id, Integer rating){
        Optional<AppointmentDto> appointmentDtoOptional = appointmentDao.findAppointment(id);
        if(appointmentDtoOptional.isPresent()){
            AppointmentDto appointmentDto = appointmentDtoOptional.get();
            appointmentDto.setRating(rating);
            appointmentDao.save(appointmentDto);

            String sitter = appointmentDto.getSitter();
            Optional<UserAuthenticationDto> userAuthenticationDtoOptional = userDao.findUserByPrincipal(sitter);
            if(userAuthenticationDtoOptional.isPresent()){
                UserAuthenticationDto userAuthenticationDto = userAuthenticationDtoOptional.get();
                userAuthenticationDto.getUser().getNotifications().add("You have been rated " + rating.toString());
                userDao.save(userAuthenticationDto);
            }
        }
    }

    public void save(AppointmentDto appointment) {
        appointmentDao.save(appointment);
    }

    public AppointmentDto update(AppointmentDto appointment) {
        appointmentDao.save(appointment);
        return appointment;
    }
}