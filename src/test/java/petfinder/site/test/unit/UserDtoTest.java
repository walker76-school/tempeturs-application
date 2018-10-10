package petfinder.site.test.unit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.user.UserDto;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static petfinder.site.common.user.UserDto.UserType.OWNER;

class UserDtoTest {

    //variables used for testing in later tests
    private UserDto testUserDto1 = new UserDto("testPrincipal", "testName", "testPhoneNumber", Arrays.asList("testRoleInList1", "testRoleInList2"), Arrays.asList(0L, 1L), OWNER, Collections.EMPTY_MAP);

    private String testPrincipal1 = "testPrincipal";
    private String testName1 = "testName";
    private String testPhoneNumber1 = "testPhoneNumber";
    private List<String> testRoles1 = Arrays.asList("testRoleInList1", "testRoleInList2");
    private List<Long> testPetIds1 = Arrays.asList(0L, 1L);
    private UserDto.UserType testType1 = OWNER;
    private Map<String, Object> testAttributes1 = Collections.EMPTY_MAP;

    @DisplayName("Testing Constructor Setting Values")
    @Test
    void constructorTestSetValues(){
        assertEquals(testUserDto1.getPrincipal(), testPrincipal1);
        assertEquals(testUserDto1.getMomento(), testPrincipal1);
        assertEquals(testUserDto1.getName(), testName1);
        assertEquals(testUserDto1.getPhoneNumber(), testPhoneNumber1);
        assertEquals(testUserDto1.getRoles(), testRoles1);
        assertEquals(testUserDto1.getPetIds(), testPetIds1);
        //assertEquals(testUserDto1.getType(), testType1);
        assertEquals(testUserDto1.getAttributes(), testAttributes1);
    }

    @DisplayName("Testing Constructor Value Types")
    @Test
    void constructorTestValueTypes(){
        assertEquals(testUserDto1.getPrincipal().getClass(), testPrincipal1.getClass());
        assertEquals(testUserDto1.getMomento().getClass(), testPrincipal1.getClass());
        assertEquals(testUserDto1.getName().getClass(), testName1.getClass());
        assertEquals(testUserDto1.getPhoneNumber().getClass(), testPhoneNumber1.getClass());
        assertEquals(testUserDto1.getRoles().getClass(), testRoles1.getClass());
        assertEquals(testUserDto1.getPetIds().getClass(), testPetIds1.getClass());
        //ssertEquals(testUserDto1.getType().getClass(), testType1.getClass());
        assertEquals(testUserDto1.getAttributes().getClass(), testAttributes1.getClass());
    }

}