package petfinder.site.common.appointment;

import java.util.Date;

public class CalendarAppointment {

    private String owner;
    private String sitter;
    private Date startDate;
    private Date endDate;

    public CalendarAppointment() {
    }

    public CalendarAppointment(AppointmentDto appointment) {
        this.owner = appointment.getOwner();
        this.sitter = appointment.getSitter();
        this.startDate = appointment.getStartDate();
        this.endDate = appointment.getEndDate();
    }

    public CalendarAppointment(String owner, String sitter, Date startDate, Date endDate) {
        this.owner = owner;
        this.sitter = sitter;
        this.startDate = startDate;
        this.endDate = endDate;
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
}
