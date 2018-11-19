package petfinder.site.common.pet;

import alloy.util.Identifiable;

/**
 * Created by jlutteringer on 8/23/17.
 */
public class PetDto implements Identifiable {
	private Long id;
	private String name;
	private String type;
	private String bio;

    public PetDto() {
        // Empty constructor required for deserialization
    }

	public PetDto(Long id, String name, String type, String bio) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.bio = bio;
	}

	@Override
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
}