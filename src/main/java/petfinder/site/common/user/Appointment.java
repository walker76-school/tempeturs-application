package petfinder.site.common.user;

public class Appointment {
    private String owner;
    private String sitter;
    private Long petId;
    private UserDao.AppointmentType type;

    public Appointment() {
        // Required for deserialization
    }

    public Appointment(String owner, String sitter, Long petId, UserDao.AppointmentType type) {
        this.owner = owner;
        this.sitter = sitter;
        this.petId = petId;
        this.type = type;
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
}
