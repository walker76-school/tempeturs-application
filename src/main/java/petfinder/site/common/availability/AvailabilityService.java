package petfinder.site.common.availability;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDto;

import java.util.Optional;

@Service
public class AvailabilityService {
    @Autowired
    private AvailabilityDao availabilityDao;

    public Optional<AvailabilityDto> findAvailability(String principal) {
        return availabilityDao.findAvailabilityByPrincipal(principal);
    }

    public void save(AvailabilityDto availability) {
        availabilityDao.save(availability);
    }

    public AvailabilityDto update(AvailabilityDto availability) {
        availabilityDao.save(availability);
        return availability;
    }
}
