package petfinder.site.endpoint;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import petfinder.site.common.availability.AvailabilityDto;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;
import petfinder.site.common.user.UserService.RegistrationRequest;

//can only pass strings to endpoints
//you do that using json
/**
 * Created by jlutteringer on 8/23/17.
 */

//User DTO object used to communicate between the backend and frontend
@RestController
@RequestMapping(value = "/api/user")
public class UserEndpoint {
	@Autowired
	private UserService userService;

	@GetMapping(value = "", produces = "application/json")
	public Optional<UserDto> getUserDetails() {
		String principal = SecurityContextHolder.getContext().getAuthentication().getName();
		return userService.findUserByPrincipal(principal);
	}

	@PostMapping(value = "/registerSitter", produces = "application/json")
	public UserDto registerSitter(@RequestBody RegistrationRequest request) {
		return userService.registerSitter(request);
	}

	@PostMapping(value = "/registerOwner", produces = "application/json")
	public UserDto registerOwner(@RequestBody RegistrationRequest request) {
		return userService.registerOwner(request);
	}

	@PostMapping(value = "/update", produces = "application/json")
	public UserDto update(@RequestBody UserDto user) {
		String principal = SecurityContextHolder.getContext().getAuthentication().getName();
		return user.getPrincipal().equals(principal) ? userService.update(user) : user;
	}
}