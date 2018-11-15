package petfinder.site.test.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import petfinder.site.common.pet.PetDto;

import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(JUnit4.class)
public class PetDtoTest {

    //variables used for testing in later tests
    private PetDto testPetDto = new PetDto(0L, "testPetDto1", "testType1", "testBio1");
    private Long idValue = 0L;
    private String nameValue = "testPetDto1";
    private String typeValue = "testType1";
    private String bioValue = "testBio1";

    @Test
    public void constructorTestSetValues(){
        assertEquals(Optional.ofNullable(testPetDto.getId()), Optional.ofNullable(0L));
        assertEquals(testPetDto.getName(), "testPetDto1");
        assertEquals(testPetDto.getType(), "testType1");
        assertEquals(testPetDto.getBio(), "testBio1");
    }

    @Test
    public void constructorTestValueTypes(){

        assertEquals(testPetDto.getId().getClass(), idValue.getClass());
        assertEquals(testPetDto.getName().getClass(), nameValue.getClass());
        assertEquals(testPetDto.getType().getClass(), typeValue.getClass());
        assertEquals(testPetDto.getBio().getClass(), bioValue.getClass());


    }
}