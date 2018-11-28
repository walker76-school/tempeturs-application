package petfinder.site.common.appointment;

public class SitterRequest {
    private Long startDate;
    private Long endDate;
    private String addressLine;
    private String city;
    private String state;
    private String zip;

    private SitterRequest() {
        // For serialization
    }

    public SitterRequest(Long startDate, Long endDate, String addressLine, String city, String state, String zip) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.addressLine = addressLine;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    public Long getStartDate() {
        return startDate;
    }

    public void setStartDate(Long startDate) {
        this.startDate = startDate;
    }

    public Long getEndDate() {
        return endDate;
    }

    public void setEndDate(Long endDate) {
        this.endDate = endDate;
    }

    public String getAddressLine() {
        return addressLine;
    }

    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }
}
