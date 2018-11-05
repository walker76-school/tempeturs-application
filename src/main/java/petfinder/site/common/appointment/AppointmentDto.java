package petfinder.site.common.appointment;

import alloy.util.Identifiable;
import petfinder.site.common.user.UserDao;

public class AppointmentDto implements Identifiable {
    private Long id;
    private String owner;
    private String sitter;
    private Long petId;
    private UserDao.AppointmentType type;
    private Integer rating;

    public AppointmentDto() {
        // Required for deserialization
    }

    public AppointmentDto(Long id, String owner, String sitter, Long petId) {
        this.id = id;
        this.owner = owner;
        this.sitter = sitter;
        this.petId = petId;
        this.type = UserDao.AppointmentType.PENDING;
        this.rating = -1;
    }

    public AppointmentDto(Long id, String owner, String sitter, Long petId, UserDao.AppointmentType type) {
        this.id = id;
        this.owner = owner;
        this.sitter = sitter;
        this.petId = petId;
        this.type = type;
        this.rating = -1;
    }

    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getSitter() {
        return sitter;
    }

    public void setSitter(String sitter) {
        this.sitter = sitter;
    }

    public Long getPetId() {
        return petId;
    }

    public void setPetId(Long petId) {
        this.petId = petId;
    }

    public UserDao.AppointmentType getType() {
        return type;
    }

    public void setType(UserDao.AppointmentType type) {
        this.type = type;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
