package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.availability.AvailabilityDto;
import petfinder.site.common.availability.AvailabilityService;

import java.util.Optional;

@RestController
@RequestMapping("/api/availability")
public class AvailabilityEndpoint {
    @Autowired
    private AvailabilityService availabilityService;

    @GetMapping(value = "/get/{principal:.+}", produces = "application/json")
    public Optional<AvailabilityDto> getAvailability(@PathVariable("principal") String principal) {
        return availabilityService.findAvailability(principal);
    }

    @PostMapping(produces = "application/json")
    public AvailabilityDto saveAvailability(@RequestBody AvailabilityDto availability) {
        availabilityService.save(availability);
        return availability;
    }
}
