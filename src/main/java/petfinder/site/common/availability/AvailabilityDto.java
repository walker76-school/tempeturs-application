package petfinder.site.common.availability;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

public class AvailabilityDto {
    private boolean sundayMorning;
    private boolean sundayMidday;
    private boolean sundayAfternoon;
    private boolean sundayEvening;

    private boolean mondayMorning;
    private boolean mondayMidday;
    private boolean mondayAfternoon;
    private boolean mondayEvening;

    private boolean tuesdayMorning;
    private boolean tuesdayMidday;
    private boolean tuesdayAfternoon;
    private boolean tuesdayEvening;

    private boolean wednesdayMorning;
    private boolean wednesdayMidday;
    private boolean wednesdayAfternoon;
    private boolean wednesdayEvening;

    private boolean thursdayMorning;
    private boolean thursdayMidday;
    private boolean thursdayAfternoon;
    private boolean thursdayEvening;

    private boolean fridayMorning;
    private boolean fridayMidday;
    private boolean fridayAfternoon;
    private boolean fridayEvening;

    private boolean saturdayMorning;
    private boolean saturdayMidday;
    private boolean saturdayAfternoon;
    private boolean saturdayEvening;

    public AvailabilityDto() {
        this.sundayMorning = false;
        this.sundayMidday = false;
        this.sundayAfternoon = false;
        this.sundayEvening = false;
        this.mondayMorning = false;
        this.mondayMidday = false;
        this.mondayAfternoon = false;
        this.mondayEvening = false;
        this.tuesdayMorning = false;
        this.tuesdayMidday = false;
        this.tuesdayAfternoon = false;
        this.tuesdayEvening = false;
        this.wednesdayMorning = false;
        this.wednesdayMidday = false;
        this.wednesdayAfternoon = false;
        this.wednesdayEvening = false;
        this.thursdayMorning = false;
        this.thursdayMidday = false;
        this.thursdayAfternoon = false;
        this.thursdayEvening = false;
        this.fridayMorning = false;
        this.fridayMidday = false;
        this.fridayAfternoon = false;
        this.fridayEvening = false;
        this.saturdayMorning = false;
        this.saturdayMidday = false;
        this.saturdayAfternoon = false;
        this.saturdayEvening = false;
    }

    public AvailabilityDto(boolean sundayMorning, boolean sundayMidday, boolean sundayAfternoon, boolean sundayEvening, boolean mondayMorning, boolean mondayMidday, boolean mondayAfternoon, boolean mondayEvening, boolean tuesdayMorning, boolean tuesdayMidday, boolean tuesdayAfternoon, boolean tuesdayEvening, boolean wednesdayMorning, boolean wednesdayMidday, boolean wednesdayAfternoon, boolean wednesdayEvening, boolean thursdayMorning, boolean thursdayMidday, boolean thursdayAfternoon, boolean thursdayEvening, boolean fridayMorning, boolean fridayMidday, boolean fridayAfternoon, boolean fridayEvening, boolean saturdayMorning, boolean saturdayMidday, boolean saturdayAfternoon, boolean saturdayEvening) {
        this.sundayMorning = sundayMorning;
        this.sundayMidday = sundayMidday;
        this.sundayAfternoon = sundayAfternoon;
        this.sundayEvening = sundayEvening;
        this.mondayMorning = mondayMorning;
        this.mondayMidday = mondayMidday;
        this.mondayAfternoon = mondayAfternoon;
        this.mondayEvening = mondayEvening;
        this.tuesdayMorning = tuesdayMorning;
        this.tuesdayMidday = tuesdayMidday;
        this.tuesdayAfternoon = tuesdayAfternoon;
        this.tuesdayEvening = tuesdayEvening;
        this.wednesdayMorning = wednesdayMorning;
        this.wednesdayMidday = wednesdayMidday;
        this.wednesdayAfternoon = wednesdayAfternoon;
        this.wednesdayEvening = wednesdayEvening;
        this.thursdayMorning = thursdayMorning;
        this.thursdayMidday = thursdayMidday;
        this.thursdayAfternoon = thursdayAfternoon;
        this.thursdayEvening = thursdayEvening;
        this.fridayMorning = fridayMorning;
        this.fridayMidday = fridayMidday;
        this.fridayAfternoon = fridayAfternoon;
        this.fridayEvening = fridayEvening;
        this.saturdayMorning = saturdayMorning;
        this.saturdayMidday = saturdayMidday;
        this.saturdayAfternoon = saturdayAfternoon;
        this.saturdayEvening = saturdayEvening;
    }

    public boolean isSundayMorning() {
        return sundayMorning;
    }

    public void setSundayMorning(boolean sundayMorning) {
        this.sundayMorning = sundayMorning;
    }

    public boolean isSundayMidday() {
        return sundayMidday;
    }

    public void setSundayMidday(boolean sundayMidday) {
        this.sundayMidday = sundayMidday;
    }

    public boolean isSundayAfternoon() {
        return sundayAfternoon;
    }

    public void setSundayAfternoon(boolean sundayAfternoon) {
        this.sundayAfternoon = sundayAfternoon;
    }

    public boolean isSundayEvening() {
        return sundayEvening;
    }

    public void setSundayEvening(boolean sundayEvening) {
        this.sundayEvening = sundayEvening;
    }

    public boolean isMondayMorning() {
        return mondayMorning;
    }

    public void setMondayMorning(boolean mondayMorning) {
        this.mondayMorning = mondayMorning;
    }

    public boolean isMondayMidday() {
        return mondayMidday;
    }

    public void setMondayMidday(boolean mondayMidday) {
        this.mondayMidday = mondayMidday;
    }

    public boolean isMondayAfternoon() {
        return mondayAfternoon;
    }

    public void setMondayAfternoon(boolean mondayAfternoon) {
        this.mondayAfternoon = mondayAfternoon;
    }

    public boolean isMondayEvening() {
        return mondayEvening;
    }

    public void setMondayEvening(boolean mondayEvening) {
        this.mondayEvening = mondayEvening;
    }

    public boolean isTuesdayMorning() {
        return tuesdayMorning;
    }

    public void setTuesdayMorning(boolean tuesdayMorning) {
        this.tuesdayMorning = tuesdayMorning;
    }

    public boolean isTuesdayMidday() {
        return tuesdayMidday;
    }

    public void setTuesdayMidday(boolean tuesdayMidday) {
        this.tuesdayMidday = tuesdayMidday;
    }

    public boolean isTuesdayAfternoon() {
        return tuesdayAfternoon;
    }

    public void setTuesdayAfternoon(boolean tuesdayAfternoon) {
        this.tuesdayAfternoon = tuesdayAfternoon;
    }

    public boolean isTuesdayEvening() {
        return tuesdayEvening;
    }

    public void setTuesdayEvening(boolean tuesdayEvening) {
        this.tuesdayEvening = tuesdayEvening;
    }

    public boolean isWednesdayMorning() {
        return wednesdayMorning;
    }

    public void setWednesdayMorning(boolean wednesdayMorning) {
        this.wednesdayMorning = wednesdayMorning;
    }

    public boolean isWednesdayMidday() {
        return wednesdayMidday;
    }

    public void setWednesdayMidday(boolean wednesdayMidday) {
        this.wednesdayMidday = wednesdayMidday;
    }

    public boolean isWednesdayAfternoon() {
        return wednesdayAfternoon;
    }

    public void setWednesdayAfternoon(boolean wednesdayAfternoon) {
        this.wednesdayAfternoon = wednesdayAfternoon;
    }

    public boolean isWednesdayEvening() {
        return wednesdayEvening;
    }

    public void setWednesdayEvening(boolean wednesdayEvening) {
        this.wednesdayEvening = wednesdayEvening;
    }

    public boolean isThursdayMorning() {
        return thursdayMorning;
    }

    public void setThursdayMorning(boolean thursdayMorning) {
        this.thursdayMorning = thursdayMorning;
    }

    public boolean isThursdayMidday() {
        return thursdayMidday;
    }

    public void setThursdayMidday(boolean thursdayMidday) {
        this.thursdayMidday = thursdayMidday;
    }

    public boolean isThursdayAfternoon() {
        return thursdayAfternoon;
    }

    public void setThursdayAfternoon(boolean thursdayAfternoon) {
        this.thursdayAfternoon = thursdayAfternoon;
    }

    public boolean isThursdayEvening() {
        return thursdayEvening;
    }

    public void setThursdayEvening(boolean thursdayEvening) {
        this.thursdayEvening = thursdayEvening;
    }

    public boolean isFridayMorning() {
        return fridayMorning;
    }

    public void setFridayMorning(boolean fridayMorning) {
        this.fridayMorning = fridayMorning;
    }

    public boolean isFridayMidday() {
        return fridayMidday;
    }

    public void setFridayMidday(boolean fridayMidday) {
        this.fridayMidday = fridayMidday;
    }

    public boolean isFridayAfternoon() {
        return fridayAfternoon;
    }

    public void setFridayAfternoon(boolean fridayAfternoon) {
        this.fridayAfternoon = fridayAfternoon;
    }

    public boolean isFridayEvening() {
        return fridayEvening;
    }

    public void setFridayEvening(boolean fridayEvening) {
        this.fridayEvening = fridayEvening;
    }

    public boolean isSaturdayMorning() {
        return saturdayMorning;
    }

    public void setSaturdayMorning(boolean saturdayMorning) {
        this.saturdayMorning = saturdayMorning;
    }

    public boolean isSaturdayMidday() {
        return saturdayMidday;
    }

    public void setSaturdayMidday(boolean saturdayMidday) {
        this.saturdayMidday = saturdayMidday;
    }

    public boolean isSaturdayAfternoon() {
        return saturdayAfternoon;
    }

    public void setSaturdayAfternoon(boolean saturdayAfternoon) {
        this.saturdayAfternoon = saturdayAfternoon;
    }

    public boolean isSaturdayEvening() {
        return saturdayEvening;
    }

    public void setSaturdayEvening(boolean saturdayEvening) {
        this.saturdayEvening = saturdayEvening;
    }
}
