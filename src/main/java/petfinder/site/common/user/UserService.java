package petfinder.site.common.user;

import java.time.Duration;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import alloy.util.AlloyAuthentication;
import alloy.util.Wait;
import alloy.util._Lists;
import alloy.util._Maps;
import petfinder.site.common.user.UserDto.UserType;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public Optional<UserDto> findUser(String id) {
		return userDao.findUser(id).map(UserAuthenticationDto::getUser);
	}

	public Optional<UserDto> findUserByPrincipal(String principal) {
		return userDao.findUserByPrincipal(principal).map(UserAuthenticationDto::getUser);
	}

	public Optional<UserAuthenticationDto> findUserAuthenticationByPrincipal(String principal) {
		return userDao.findUserByPrincipal(principal);
	}

	public static class RegistrationRequest {
		private String principal;
		private String password;
		private String name;
		private String phoneNumber;
		private String addressLine;
		private String city;
		private String state;
		private String zip;
		private Map<String, Object> attributes;

		public String getPrincipal() {
			return principal;
		}

		public void setPrincipal(String principal) {
			this.principal = principal;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

		public String getPhoneNumber() {
			return phoneNumber;
		}

		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}

		public String getAddressLine() { return addressLine; }

		public void setAddressLine(String addressLine) { this.addressLine = addressLine; }

		public String getCity() { return city; }

		public void setCity(String city) { this.city = city; }

		public String getState() { return state; }

		public void setState(String state) { this.state = state; }

		public String getZip() { return zip; }

		public void setZip(String zip) { this.zip = zip; }

		public Map<String, Object> getAttributes() {
			return attributes;
		}

		public void setAttributes(Map<String, Object> attributes) {
			this.attributes = attributes;
		}
	}

	public UserDto registerSitter(RegistrationRequest request) {
		UserAuthenticationDto userAuthentication = new UserAuthenticationDto(
				new UserDto(request.getPrincipal(), request.getName(), request.getPhoneNumber(), request.getAddressLine(), request.getCity(), request.getState(),request.getZip(),_Lists.list("ROLE_USER"), UserType.SITTER, request.getAttributes()), passwordEncoder.encode(request.getPassword()));

		userDao.save(userAuthentication);
		return userAuthentication.getUser();
	}

	public UserDto registerOwner(RegistrationRequest request) {
		UserAuthenticationDto userAuthentication = new UserAuthenticationDto(
				new UserDto(request.getPrincipal(), request.getName(), request.getPhoneNumber(),request.getAddressLine(), request.getCity(), request.getState(),request.getZip(), _Lists.list("ROLE_USER"), UserType.OWNER, request.getAttributes()), passwordEncoder.encode(request.getPassword()));

		userDao.save(userAuthentication);
		return userAuthentication.getUser();
	}

	public UserDto update(UserDto user) {
		String principal = SecurityContextHolder.getContext().getAuthentication().getName();
		UserAuthenticationDto uadto = null;

		if(userDao.findUserByPrincipal(principal).isPresent()){
			uadto = userDao.findUserByPrincipal(principal).get();
		}

		if(uadto != null) {
			uadto.setUser(user);
			userDao.save(uadto);
		}

		return user;
	}
}