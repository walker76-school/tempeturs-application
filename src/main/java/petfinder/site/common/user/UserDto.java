package petfinder.site.common.user;

import java.util.*;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Identifiable;
import alloy.util.Momento;

/**
 * Created by jlutteringer on 8/23/17.
 */
public class UserDto implements Momento<String> {
	private String principal;
	private String name;
	private String phoneNumber;
	private List<String> roles;
	private List<Long> petIds;
	private UserType type;
	private Map<String, Object> attributes;

	private UserDto() {

	}

	public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) {
		this.principal = principal;
		this.type = type;
		this.roles = roles;
		this.attributes = attributes;
	}

    public UserDto(String principal, String name, String phoneNumber, List<String> roles, UserType type, Map<String, Object> attributes) {
		this.principal = principal;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.roles = roles;
		this.type = type;
		this.petIds = new ArrayList<>();
		this.attributes = attributes;
	}

	public UserDto(String principal, String name, String phoneNumber, List<String> roles, List<Long> petIds, UserType type, Map<String, Object> attributes) {
		this.principal = principal;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.roles = roles;
		this.type = type;
		this.petIds = petIds;
		this.attributes = attributes;
	}

	public String getPrincipal() {
		return principal;
	}

    public String getName() {
        return name;
    }

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public List<String> getRoles() {
		return roles;
	}

	public List<Long> getPetIds(){
		return petIds;
	}

	public Map<String, Object> getAttributes() {
		return attributes;
	}

	public UserType getType() {
		return type;
	}

	@JsonIgnore
	@Override
	public String getMomento() {
		return principal;
	}

	public enum UserType {
		OWNER, SITTER
	}
}