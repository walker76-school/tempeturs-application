package petfinder.site.common.appointment;

import java.util.Date;
import java.util.List;
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

    public static class AppointmentRequest {
        private Long id;
        private String owner;
        private String sitter;
        private List<Long> petIds;
        private Date startDate;
        private Date endDate;

        public AppointmentRequest() {
            // Required for serialization
        }

        public AppointmentRequest(Long id, String owner, String sitter, List<Long> petIds, Date startDate, Date endDate) {
            this.id = id;
            this.owner = owner;
            this.sitter = sitter;
            this.petIds = petIds;
            this.startDate = startDate;
            this.endDate = endDate;
        }

        public Long getId() {
            return id;
        }
        public String getOwner() {
            return owner;
        }
        public void setId(Long id) {
            this.id = id;
        }
        public void setOwner(String owner) {
            this.owner = owner;
        }
        public void setSitter(String sitter) {
            this.sitter = sitter;
        }
        public void setPetIds(List<Long> petIds) {
            this.petIds = petIds;
        }
        public void setStartDate(Date startDate) {
            this.startDate = startDate;
        }
        public void setEndDate(Date endDate) {
            this.endDate = endDate;
        }
        public String getSitter() {

            return sitter;
        }
        public List<Long> getPetIds() {
            return petIds;
        }
        public Date getStartDate() {
            return startDate;
        }
        public Date getEndDate() {
            return endDate;
        }
    }

    public void rejectAppointment(Long id) {
        appointmentDao.reject(id);
    }

    public void cancelAppointment(Long id) {
        Optional<AppointmentDto> appointmentDtoOptional = appointmentDao.findAppointment(id);
        if(appointmentDtoOptional.isPresent()){
            AppointmentDto appointmentDto = appointmentDtoOptional.get();

            String sitter = appointmentDto.getSitter();
            Optional<UserAuthenticationDto> userAuthenticationDtoOptional = userDao.findUserByPrincipal(sitter);
            if(userAuthenticationDtoOptional.isPresent()){
                UserAuthenticationDto userAuthenticationDto = userAuthenticationDtoOptional.get();
                userAuthenticationDto.getUser().getNotifications().add("Appointment " + id + " has been canceled");
                userAuthenticationDto.getUser().getAppointments().remove(id);
                userDao.save(userAuthenticationDto);
            }

            String owner = appointmentDto.getOwner();
            userAuthenticationDtoOptional = userDao.findUserByPrincipal(owner);
            if(userAuthenticationDtoOptional.isPresent()){
                UserAuthenticationDto userAuthenticationDto = userAuthenticationDtoOptional.get();
                userAuthenticationDto.getUser().getNotifications().add("Appointment " + id + " has been canceled");
                userAuthenticationDto.getUser().getAppointments().remove(id);
                userDao.save(userAuthenticationDto);
            }
        }
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