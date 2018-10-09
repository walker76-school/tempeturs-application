package petfinder.site.test.unit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.pet.PetDto;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class PetDtoTest {

    //variables used for testing in later tests
    private PetDto testPetDto = new PetDto(0L, "testPetDto1", "testType1");
    private Long idValue = 0L;
    private String nameValue = "testPetDto1";
    private String typeValue = "testType1";

    @DisplayName("Testing Constructor Setting Values")
    @Test
    void constructorTestSetValues(){
        assertEquals(Optional.ofNullable(testPetDto.getId()), Optional.ofNullable(0L));
        assertEquals(testPetDto.getName(), "testPetDto1");
        assertEquals(testPetDto.getType(), "testType1");
    }

    @DisplayName("Testing Constructor Value Types")
    @Test
    void constructorTestValueTypes(){

        assertEquals(testPetDto.getId().getClass(), idValue.getClass());
        assertEquals(testPetDto.getName().getClass(), nameValue.getClass());
        assertEquals(testPetDto.getType().getClass(), typeValue.getClass());


    }
}