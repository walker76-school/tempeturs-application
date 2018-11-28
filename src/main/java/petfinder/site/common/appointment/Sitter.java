package petfinder.site.common.appointment;

import petfinder.site.common.user.UserDto;

public class Sitter {
    private UserDto userDto;
    private Integer rating;
    private String distance;

    public Sitter() {
    }

    public Sitter(UserDto userDto, Integer rating, String distance) {
        this.userDto = userDto;
        this.rating = rating;
        this.distance = distance;
    }

    public UserDto getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }
}
