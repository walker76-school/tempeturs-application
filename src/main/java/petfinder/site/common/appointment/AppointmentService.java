package petfinder.site.common.appointment;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDao;
import petfinder.site.common.pet.PetDto;

/**
 * Created by awalker on 11/5/2018.
 */
@Service
public class AppointmentService {

    @Autowired
    private AppointmentDao appointmentDao;

    public Optional<AppointmentDto> findAppointment(Long id) {
        return appointmentDao.findAppointment(id);
    }

    public void approveAppointment(Long id) {
        appointmentDao.approve(id);
    }

    public void rejectAppointment(Long id) {
        appointmentDao.reject(id);
    }

    public void save(AppointmentDto appointment) {
        appointmentDao.save(appointment);
    }

    public AppointmentDto update(AppointmentDto appointment) {
        appointmentDao.save(appointment);
        return appointment;
    }
}