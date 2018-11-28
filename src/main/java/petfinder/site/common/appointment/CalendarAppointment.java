package petfinder.site.common.appointment;

import petfinder.site.common.user.UserDao;

import java.util.Date;

public class CalendarAppointment {

    private String owner;
    private String sitter;
    private Date startDate;
    private Date endDate;
    private UserDao.AppointmentType type;

    public CalendarAppointment() {
    }

    public CalendarAppointment(AppointmentDto appointment) {
        this.owner = appointment.getOwner();
        this.sitter = appointment.getSitter();
        this.startDate = appointment.getStartDate();
        this.endDate = appointment.getEndDate();
        this.type = appointment.getType();
    }

    public CalendarAppointment(String owner, String sitter, Date startDate, Date endDate, UserDao.AppointmentType type) {
        this.owner = owner;
        this.sitter = sitter;
        this.startDate = startDate;
        this.endDate = endDate;
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
        sitter = sitter;
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

    public UserDao.AppointmentType getType() {
        return type;
    }

    public void setType(UserDao.AppointmentType type) {
        this.type = type;
    }
}
