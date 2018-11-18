package petfinder.site.common.appointment;

import alloy.util.Identifiable;
import petfinder.site.common.user.UserDao;

import java.util.Date;
import java.util.List;

public class AppointmentDto implements Identifiable {
    private Long id;
    private String owner;
    private String sitter;
    private List<Long> petIds;
    private UserDao.AppointmentType type;
    private Integer rating;
    private Date startDate;
    private Date endDate;

    public AppointmentDto() {
        // Required for deserialization
    }

    public AppointmentDto(Long id, String owner, String sitter, List<Long> petIds, Date startDate, Date endDate) {
        this.id = id;
        this.owner = owner;
        this.sitter = sitter;
        this.petIds = petIds;
        this.type = UserDao.AppointmentType.PENDING;
        this.rating = -1;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public AppointmentDto(Long id, String owner, String sitter, List<Long> petIds, UserDao.AppointmentType type, Integer rating, Date startDate, Date endDate) {
        this.id = id;
        this.owner = owner;
        this.sitter = sitter;
        this.petIds = petIds;
        this.type = type;
        this.rating = rating;
        this.startDate = startDate;
        this.endDate = endDate;
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

    public List<Long> getPetIds() {
        return petIds;
    }

    public void setPetIds(List<Long> petIds) {
        this.petIds = petIds;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
