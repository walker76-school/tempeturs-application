package petfinder.site.test.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import petfinder.site.common.user.UserDto;

import java.util.*;

import static org.junit.Assert.assertEquals;
import static petfinder.site.common.user.UserDto.UserType.OWNER;

@RunWith(JUnit4.class)
public class UserDtoTest {

    private String testPrincipal1 = "testPrincipal";
    private String testName1 = "testName";
    private String testPhoneNumber1 = "testPhoneNumber";
    private String testAddressLine1 = "testAddressLine";
    private String testCity1 = "testCity";
    private String testState1 = "testState";
    private String testZip1 = "testZip";
    private List<String> testRoles1 = Arrays.asList("testRoleInList1", "testRoleInList2", "testRoleInList3");
    private List<Long> testPetIds1 = Arrays.asList(0L, 1L, 2L);
    private UserDto.UserType testType1 = OWNER;
    private Map<String, Object> testAttributes1 = new HashMap<String, Object>(){{
        put("testMapAttribute1", new Object());
        put("testMapAttribute2", new Object());
        put("testMapAttribute3", new Object());
    }};
    private UserDto testUserDto1 = new UserDto("testPrincipal", "testName", "testPhoneNumber", "testAddressLine","testCity","testState", "testZip",   Arrays.asList("testRoleInList1", "testRoleInList2", "testRoleInList3"), Arrays.asList(0L, 1L, 2L), OWNER, testAttributes1);

    @Test
    public void constructorTestSetValues(){
        assertEquals(testUserDto1.getPrincipal(), testPrincipal1);
        assertEquals(testUserDto1.getMomento(), testPrincipal1);
        assertEquals(testUserDto1.getName(), testName1);
        assertEquals(testUserDto1.getPhoneNumber(), testPhoneNumber1);
        assertEquals(testUserDto1.getAddressLine(), testAddressLine1);
        assertEquals(testUserDto1.getCity(), testCity1);
        assertEquals(testUserDto1.getState(), testState1);
        assertEquals(testUserDto1.getZip(), testZip1);
        assertEquals(testUserDto1.getRoles(), testRoles1);
        assertEquals(testUserDto1.getPetIds(), testPetIds1);
        assertEquals(testUserDto1.getType(), testType1);
        assertEquals(testUserDto1.getAttributes(), testAttributes1);
    }

    @Test
    public void constructorTestValueTypes(){
        assertEquals(testUserDto1.getPrincipal().getClass(), testPrincipal1.getClass());
        assertEquals(testUserDto1.getMomento().getClass(), testPrincipal1.getClass());
        assertEquals(testUserDto1.getName().getClass(), testName1.getClass());
        assertEquals(testUserDto1.getPhoneNumber().getClass(), testPhoneNumber1.getClass());
        assertEquals(testUserDto1.getAddressLine().getClass(), testAddressLine1.getClass());
        assertEquals(testUserDto1.getCity().getClass(), testCity1.getClass());
        assertEquals(testUserDto1.getState().getClass(), testState1.getClass());
        assertEquals(testUserDto1.getZip().getClass(), testZip1.getClass());
        assertEquals(testUserDto1.getRoles().getClass(), testRoles1.getClass());
        assertEquals(testUserDto1.getPetIds().getClass(), testPetIds1.getClass());
        assertEquals(testUserDto1.getType().getClass(), testType1.getClass());
        assertEquals(testUserDto1.getAttributes().getClass(), testAttributes1.getClass());
    }
}