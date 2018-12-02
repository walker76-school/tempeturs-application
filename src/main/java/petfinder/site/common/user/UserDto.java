package petfinder.site.common.user;

import java.util.*;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;
import petfinder.site.common.appointment.AppointmentDto;
import petfinder.site.common.availability.AvailabilityDto;

/**
 * Created by jlutteringer on 8/23/17.
 */
public class UserDto implements Momento<String> {
	private String principal;
	private String name;
	private String phoneNumber;
	// adding these to expand address, city , state and zip
	private String addressLine;
	private String city;
	private String state;
	private String zip;
	private List<String> roles;
	private List<Long> petIds;
	private List<Long> appointments;
	private List<String> notifications;
	private UserType type;
	private AvailabilityDto availability;
	private Map<String, Object> attributes;

	private UserDto() {

	}

	public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) {
		this.principal = principal;
		this.type = type;
		this.roles = roles;
		this.notifications = new ArrayList<>();
		if(type == UserType.SITTER)
		    this.availability = new AvailabilityDto();
		else
		    this.availability = null;
		this.appointments = new ArrayList<>();
		this.attributes = attributes;
	}

    public UserDto(String principal, String name, String phoneNumber, String addressLine, String city, String state, String zip, List<String> roles, UserType type, Map<String, Object> attributes) {
		this.principal = principal;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.addressLine = addressLine;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.roles = roles;
        this.notifications = new ArrayList<>();
		this.type = type;
		this.petIds = new ArrayList<>();
        if(type == UserType.SITTER)
            this.availability = new AvailabilityDto();
        else
            this.availability = null;
		this.appointments = new ArrayList<>();
        this.attributes = attributes;
	}

	public UserDto(String principal, String name, String phoneNumber, String addressLine, String city, String state, String zip, List<String> roles, List<Long> petIds, UserType type, Map<String, Object> attributes) {
		this.principal = principal;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.addressLine = addressLine;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.roles = roles;
        this.notifications = new ArrayList<>();
		this.type = type;
		this.petIds = petIds;
        if(type == UserType.SITTER)
            this.availability = new AvailabilityDto();
        else
            this.availability = null;
		this.appointments = new ArrayList<>();
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

	public String getAddressLine() {
		return addressLine;
	}

	public String getCity() {
		return city;
	}

	public String getState() {
		return state;
	}

	public String getZip() {
		return zip;
	}

	public List<String> getRoles() {
		return roles;
	}

	public List<Long> getPetIds(){
		return petIds;
	}

    public List<String> getNotifications() {
        return notifications;
    }

    public AvailabilityDto getAvailability() {
        return availability;
    }

    public void setAvailability(AvailabilityDto availability){
		this.availability = availability;
	}

	public List<Long> getAppointments() {
		return appointments;
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
		OWNER, SITTER, COMBO
	}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserDto userDto = (UserDto) o;

        if (!principal.equals(userDto.principal)) return false;
        if (!name.equals(userDto.name)) return false;
        if (!phoneNumber.equals(userDto.phoneNumber)) return false;
        if (!addressLine.equals(userDto.addressLine)) return false;
        if (!city.equals(userDto.city)) return false;
        if (!state.equals(userDto.state)) return false;
        if (!zip.equals(userDto.zip)) return false;
        if (!roles.equals(userDto.roles)) return false;
        if (!petIds.equals(userDto.petIds)) return false;
        if (!appointments.equals(userDto.appointments)) return false;
        if (!notifications.equals(userDto.notifications)) return false;
        if (type != userDto.type) return false;
        if (availability != null ? !availability.equals(userDto.availability) : userDto.availability != null)
            return false;
        return attributes.equals(userDto.attributes);
    }

    @Override
    public int hashCode() {
        int result = principal.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + phoneNumber.hashCode();
        result = 31 * result + addressLine.hashCode();
        result = 31 * result + city.hashCode();
        result = 31 * result + state.hashCode();
        result = 31 * result + zip.hashCode();
        result = 31 * result + roles.hashCode();
        result = 31 * result + petIds.hashCode();
        result = 31 * result + appointments.hashCode();
        result = 31 * result + notifications.hashCode();
        result = 31 * result + type.hashCode();
        result = 31 * result + (availability != null ? availability.hashCode() : 0);
        result = 31 * result + attributes.hashCode();
        return result;
    }
}