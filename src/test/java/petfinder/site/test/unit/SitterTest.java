package petfinder.site.test.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import petfinder.site.common.appointment.Sitter;
import petfinder.site.common.user.UserDto;

import java.util.*;

import static org.junit.Assert.assertEquals;
import static petfinder.site.common.user.UserDto.UserType.OWNER;

@RunWith(JUnit4.class)
public class SitterTest {

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
    private UserDto testUserDto = new UserDto("testPrincipal", "testName", "testPhoneNumber", "testAddressLine","testCity","testState", "testZip",   Arrays.asList("testRoleInList1", "testRoleInList2", "testRoleInList3"), Arrays.asList(0L, 1L, 2L), OWNER, testAttributes1);
    private Integer testRating = -1;
    private String testDistance = "1 mi.";

    private Sitter testSitter = new Sitter(new UserDto("testPrincipal", "testName", "testPhoneNumber", "testAddressLine","testCity","testState", "testZip",   Arrays.asList("testRoleInList1", "testRoleInList2", "testRoleInList3"), Arrays.asList(0L, 1L, 2L), OWNER, testAttributes1), -1, "1 mi.");

    @Test
    public void constructorTestSetValues(){
        assertEquals(testSitter.getUserDto(), testUserDto);
        assertEquals(testSitter.getUserDto().getPrincipal(), testPrincipal1);
        assertEquals(testSitter.getUserDto().getMomento(), testPrincipal1);
        assertEquals(testSitter.getUserDto().getName(), testName1);
        assertEquals(testSitter.getUserDto().getPhoneNumber(), testPhoneNumber1);
        assertEquals(testSitter.getUserDto().getAddressLine(), testAddressLine1);
        assertEquals(testSitter.getUserDto().getCity(), testCity1);
        assertEquals(testSitter.getUserDto().getState(), testState1);
        assertEquals(testSitter.getUserDto().getZip(), testZip1);
        assertEquals(testSitter.getUserDto().getRoles(), testRoles1);
        assertEquals(testSitter.getUserDto().getPetIds(), testPetIds1);
        assertEquals(testSitter.getUserDto().getType(), testType1);
        assertEquals(testSitter.getUserDto().getAttributes(), testAttributes1);
        assertEquals(testSitter.getRating(), testRating);
        assertEquals(testSitter.getDistance(), testDistance);
    }

    @Test
    public void constructorTestValueTypes(){
        assertEquals(testSitter.getUserDto().getClass(), testUserDto.getClass());
        assertEquals(testSitter.getUserDto().getPrincipal().getClass(), testPrincipal1.getClass());
        assertEquals(testSitter.getUserDto().getMomento().getClass(), testPrincipal1.getClass());
        assertEquals(testSitter.getUserDto().getName().getClass(), testName1.getClass());
        assertEquals(testSitter.getUserDto().getPhoneNumber().getClass(), testPhoneNumber1.getClass());
        assertEquals(testSitter.getUserDto().getAddressLine().getClass(), testAddressLine1.getClass());
        assertEquals(testSitter.getUserDto().getCity().getClass(), testCity1.getClass());
        assertEquals(testSitter.getUserDto().getState().getClass(), testState1.getClass());
        assertEquals(testSitter.getUserDto().getZip().getClass(), testZip1.getClass());
        assertEquals(testSitter.getUserDto().getRoles().getClass(), testRoles1.getClass());
        assertEquals(testSitter.getUserDto().getPetIds().getClass(), testPetIds1.getClass());
        assertEquals(testSitter.getUserDto().getType().getClass(), testType1.getClass());
        assertEquals(testSitter.getUserDto().getAttributes().getClass(), testAttributes1.getClass());
        assertEquals(testSitter.getRating().getClass(), testRating.getClass());
        assertEquals(testSitter.getDistance().getClass(), testDistance.getClass());
    }
}
