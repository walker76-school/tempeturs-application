package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.availability.AvailabilityDto;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;

import java.util.Optional;

@RestController
@RequestMapping("/api/availability")
public class AvailabilityEndpoint {
    @Autowired
    private UserService userService;
    
    @GetMapping(value = "/get", produces = "application/json")
    public Optional<AvailabilityDto> getAvailability() {
        String principal = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<UserDto> userDto = userService.findUserByPrincipal(principal);
        if(userDto.isPresent()){
            UserDto user = userDto.get();
            if(user.getType() == UserDto.UserType.SITTER || user.getType() == UserDto.UserType.COMBO) {
                return Optional.of(user.getAvailability());
            } else {
                return Optional.empty();
            }
        } else {
            return Optional.empty();
        }
    }

    @GetMapping(value = "/get/{principal}", produces = "application/json")
    public Optional<AvailabilityDto> getAvailability(@PathVariable("principal") String principal) {
        Optional<UserDto> userDto = userService.findUserByPrincipal(principal);
        if(userDto.isPresent()){
            UserDto user = userDto.get();
            if(user.getType() == UserDto.UserType.SITTER || user.getType() == UserDto.UserType.COMBO) {
                return Optional.of(user.getAvailability());
            } else {
                return Optional.empty();
            }
        } else {
            return Optional.empty();
        }
    }
}
