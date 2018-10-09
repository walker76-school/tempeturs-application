package petfinder.site.test.unit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.user.UserDto;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static petfinder.site.common.user.UserDto.UserType.OWNER;

class UserDtoTest {

    //variables used for testing in later tests
    private String testPrincipal1 = "testPrincipal";
    private String testName1 = "testName";
    private String testPhoneNumber1 = "testPhoneNumber";
    private List<String> testRoles1 = Arrays.asList("testRoleInList1", "testRoleInList2", "testRoleInList3");
    private List<Long> testPetIds1 = Arrays.asList(0L, 1L, 2L);
    private UserDto.UserType testType1 = OWNER;
    private Map<String, Object> testAttributes1 = new HashMap<String, Object>(){{
        put("testMapAttribute1", new Object());
        put("testMapAttribute2", new Object());
        put("testMapAttribute3", new Object());
    }};
    private UserDto testUserDto1 = new UserDto("testPrincipal", "testName", "testPhoneNumber", Arrays.asList("testRoleInList1", "testRoleInList2", "testRoleInList3"), Arrays.asList(0L, 1L, 2L), OWNER, testAttributes1);


    @DisplayName("Testing Constructor Setting Values")
    @Test
    void constructorTestSetValues(){
        assertEquals(testUserDto1.getPrincipal(), testPrincipal1);
        assertEquals(testUserDto1.getMomento(), testPrincipal1);
        assertEquals(testUserDto1.getName(), testName1);
        assertEquals(testUserDto1.getPhoneNumber(), testPhoneNumber1);
        assertEquals(testUserDto1.getRoles(), testRoles1);
        assertEquals(testUserDto1.getPetIds(), testPetIds1);
        assertEquals(testUserDto1.getType(), testType1);
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
        assertEquals(testUserDto1.getType().getClass(), testType1.getClass());
        assertEquals(testUserDto1.getAttributes().getClass(), testAttributes1.getClass());
    }
}