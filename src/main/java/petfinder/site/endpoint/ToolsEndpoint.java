package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;

import java.util.Optional;

@RestController
@RequestMapping(value = "/tools")
public class ToolsEndpoint {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/availability/{principal:.+}", produces = "application/json")
    public boolean checkPrincipalAvailability(@PathVariable("principal") String principal) {
        System.out.println(principal);
        Optional<UserDto> optional = userService.findUserByPrincipal(principal);
        System.out.println(optional);
        return optional.isPresent();
    }
}
