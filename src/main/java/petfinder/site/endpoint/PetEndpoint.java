package petfinder.site.endpoint;

import java.math.BigInteger;
import java.nio.ByteBuffer;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import petfinder.site.common.pet.PetDto;
import petfinder.site.common.pet.PetRegistrationRequest;
import petfinder.site.common.pet.PetService;


/**
 * Created by jlutteringer on 8/23/17.
 */
@RestController
@RequestMapping("/api/pets")
public class PetEndpoint {
	@Autowired
	private PetService petService;

	@GetMapping(value = "/{id}", produces = "application/json")
	public Optional<PetDto> getPet(@PathVariable("id") Long id) {
		return petService.findPet(id);
	}

	@PostMapping(produces = "application/json")
	public PetDto savePet(@RequestBody PetRegistrationRequest pet) {
		Integer id = generateUniqueId();
		PetDto dto = new PetDto(id.longValue(), pet.getName(), pet.getType(), pet.getBio());
		petService.save(dto);
		return dto;
	}

	@PostMapping(value="/update", produces = "application/json")
	public PetDto updatePet(@RequestBody PetDto pet) {
		return petService.update(pet);
	}

	private Integer generateUniqueId()
	{
		int val = -1;

		do {
			val = new Random().nextInt(200000);
		} while (val < 0);

		return val;
	}
}
