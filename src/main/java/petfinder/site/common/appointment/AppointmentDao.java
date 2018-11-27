package petfinder.site.common.appointment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import petfinder.site.common.user.UserDao;
import petfinder.site.elasticsearch.AppointmentElasticsearchRepository;

import java.util.Optional;

@Repository
public class AppointmentDao {
    @Autowired
    private AppointmentElasticsearchRepository appointmentElasticsearchRepository;

    public Optional<AppointmentDto> findAppointment(Long id) {
        return appointmentElasticsearchRepository.find(id);
    }

    public void approve(Long id) {
        Optional<AppointmentDto> appointment = appointmentElasticsearchRepository.find(id);
        if(appointment.isPresent()){
            AppointmentDto appointmentDto = appointment.get();
            appointmentDto.setType(UserDao.AppointmentType.ACCEPTED);
            appointmentElasticsearchRepository.save(appointmentDto);
        }
    }

    public void reject(Long id) {
        Optional<AppointmentDto> appointment = appointmentElasticsearchRepository.find(id);
        if(appointment.isPresent()){
            AppointmentDto appointmentDto = appointment.get();
            appointmentDto.setType(UserDao.AppointmentType.REJECTED);
            appointmentElasticsearchRepository.save(appointmentDto);
        }
    }

    public void cancel(Long id) {
        Optional<AppointmentDto> appointment = appointmentElasticsearchRepository.find(id);
        if(appointment.isPresent()){
            AppointmentDto appointmentDto = appointment.get();
            appointmentDto.setType(UserDao.AppointmentType.CANCELLED);
            appointmentElasticsearchRepository.save(appointmentDto);
        }
    }

    public void save(AppointmentDto appointment) {
        appointmentElasticsearchRepository.save(appointment);
    }
}
