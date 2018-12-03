package petfinder.site.test.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import petfinder.site.common.appointment.AppointmentDto;
import petfinder.site.common.user.UserDao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

@RunWith(JUnit4.class)
public class AppointmentDtoTest {

    private AppointmentDto testAppointmentDtoFunctional = new AppointmentDto(0L, "owner", "sitter", new ArrayList<>(), new Date(0), new Date(0));
    private AppointmentDto testAppointmentDtoFullPENDING = new AppointmentDto(0L, "owner", "sitter", new ArrayList<>(), UserDao.AppointmentType.PENDING, -1, new Date(0), new Date(0));
    private AppointmentDto testAppointmentDtoFullACCEPTED = new AppointmentDto(0L, "owner", "sitter", new ArrayList<>(), UserDao.AppointmentType.ACCEPTED, -1, new Date(0), new Date(0));
    private AppointmentDto testAppointmentDtoFullCANCELLED = new AppointmentDto(0L, "owner", "sitter", new ArrayList<>(), UserDao.AppointmentType.CANCELLED, -1, new Date(0), new Date(0));
    private AppointmentDto testAppointmentDtoFullREJECTED = new AppointmentDto(0L, "owner", "sitter", new ArrayList<>(), UserDao.AppointmentType.REJECTED, -1, new Date(0), new Date(0));

    private Long idValue = 0L;
    private String ownerValue = "owner";
    private String sitterValue = "sitter";
    private List<Long> petIdsValue = new ArrayList<>();
    private UserDao.AppointmentType typeValuePENDING = UserDao.AppointmentType.PENDING;
    private UserDao.AppointmentType typeValueACCEPTED = UserDao.AppointmentType.ACCEPTED;
    private UserDao.AppointmentType typeValueCANCELLED = UserDao.AppointmentType.CANCELLED;
    private UserDao.AppointmentType typeValueREJECTED = UserDao.AppointmentType.REJECTED;
    private Integer ratingValue = -1;
    private Date startDateValue = new Date(0);
    private Date endDateValue = new Date(0);

    @Test
    public void constructorFunctionalTestSetValues(){
        assertEquals(Optional.ofNullable(testAppointmentDtoFunctional.getId()), Optional.ofNullable(0L));
        assertEquals(testAppointmentDtoFunctional.getOwner(), "owner");
        assertEquals(testAppointmentDtoFunctional.getSitter(), "sitter");
        assertEquals(testAppointmentDtoFunctional.getPetIds(), new ArrayList<>());
        assertEquals(testAppointmentDtoFunctional.getType(), UserDao.AppointmentType.PENDING);
        assertEquals(Optional.ofNullable(testAppointmentDtoFunctional.getRating()), Optional.ofNullable(-1));
        assertEquals(testAppointmentDtoFunctional.getStartDate(), new Date(0));
        assertEquals(testAppointmentDtoFunctional.getEndDate(), new Date(0));
    }

    @Test
    public void constructorFunctionalTestValueTypes(){
        assertEquals(testAppointmentDtoFunctional.getId().getClass(), idValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getOwner().getClass(), ownerValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getSitter().getClass(), sitterValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getPetIds().getClass(), petIdsValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getType().getClass(), typeValuePENDING.getClass());
        assertEquals(testAppointmentDtoFunctional.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getEndDate().getClass(), endDateValue.getClass());
    }

    @Test
    public void constructorFullTestSetValuesPending(){
        assertEquals(Optional.ofNullable(testAppointmentDtoFullPENDING.getId()), Optional.ofNullable(0L));
        assertEquals(testAppointmentDtoFullPENDING.getOwner(), "owner");
        assertEquals(testAppointmentDtoFullPENDING.getSitter(), "sitter");
        assertEquals(testAppointmentDtoFullPENDING.getPetIds(), new ArrayList<>());
        assertEquals(testAppointmentDtoFullPENDING.getType(), UserDao.AppointmentType.PENDING);
        assertEquals(Optional.ofNullable(testAppointmentDtoFullPENDING.getRating()), Optional.ofNullable(-1));
        assertEquals(testAppointmentDtoFullPENDING.getStartDate(), new Date(0));
        assertEquals(testAppointmentDtoFullPENDING.getEndDate(), new Date(0));
    }

    @Test
    public void constructorFullTestValueTypesPending(){
        assertEquals(testAppointmentDtoFullPENDING.getId().getClass(), idValue.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getOwner().getClass(), ownerValue.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getSitter().getClass(), sitterValue.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getPetIds().getClass(), petIdsValue.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getType().getClass(), typeValuePENDING.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFullPENDING.getEndDate().getClass(), endDateValue.getClass());
    }

    @Test
    public void constructorFullTestSetValuesAccepted(){
        assertEquals(Optional.ofNullable(testAppointmentDtoFullACCEPTED.getId()), Optional.ofNullable(0L));
        assertEquals(testAppointmentDtoFullACCEPTED.getOwner(), "owner");
        assertEquals(testAppointmentDtoFullACCEPTED.getSitter(), "sitter");
        assertEquals(testAppointmentDtoFullACCEPTED.getPetIds(), new ArrayList<>());
        assertEquals(testAppointmentDtoFullACCEPTED.getType(), UserDao.AppointmentType.ACCEPTED);
        assertEquals(Optional.ofNullable(testAppointmentDtoFullACCEPTED.getRating()), Optional.ofNullable(-1));
        assertEquals(testAppointmentDtoFullACCEPTED.getStartDate(), new Date(0));
        assertEquals(testAppointmentDtoFullACCEPTED.getEndDate(), new Date(0));
    }

    @Test
    public void constructorFullTestValueTypesAccepted(){
        assertEquals(testAppointmentDtoFullACCEPTED.getId().getClass(), idValue.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getOwner().getClass(), ownerValue.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getSitter().getClass(), sitterValue.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getPetIds().getClass(), petIdsValue.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getType().getClass(), typeValueACCEPTED.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFullACCEPTED.getEndDate().getClass(), endDateValue.getClass());
    }

    @Test
    public void constructorFullTestSetValuesCancelled(){
        assertEquals(Optional.ofNullable(testAppointmentDtoFullCANCELLED.getId()), Optional.ofNullable(0L));
        assertEquals(testAppointmentDtoFullCANCELLED.getOwner(), "owner");
        assertEquals(testAppointmentDtoFullCANCELLED.getSitter(), "sitter");
        assertEquals(testAppointmentDtoFullCANCELLED.getPetIds(), new ArrayList<>());
        assertEquals(testAppointmentDtoFullCANCELLED.getType(), UserDao.AppointmentType.CANCELLED);
        assertEquals(Optional.ofNullable(testAppointmentDtoFullCANCELLED.getRating()), Optional.ofNullable(-1));
        assertEquals(testAppointmentDtoFullCANCELLED.getStartDate(), new Date(0));
        assertEquals(testAppointmentDtoFullCANCELLED.getEndDate(), new Date(0));
    }

    @Test
    public void constructorFullTestValueTypesCancelled(){
        assertEquals(testAppointmentDtoFullCANCELLED.getId().getClass(), idValue.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getOwner().getClass(), ownerValue.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getSitter().getClass(), sitterValue.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getPetIds().getClass(), petIdsValue.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getType().getClass(), typeValueCANCELLED.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFullCANCELLED.getEndDate().getClass(), endDateValue.getClass());
    }

    @Test
    public void constructorFullTestSetValuesRejected(){
        assertEquals(Optional.ofNullable(testAppointmentDtoFullREJECTED.getId()), Optional.ofNullable(0L));
        assertEquals(testAppointmentDtoFullREJECTED.getOwner(), "owner");
        assertEquals(testAppointmentDtoFullREJECTED.getSitter(), "sitter");
        assertEquals(testAppointmentDtoFullREJECTED.getPetIds(), new ArrayList<>());
        assertEquals(testAppointmentDtoFullREJECTED.getType(), UserDao.AppointmentType.REJECTED);
        assertEquals(Optional.ofNullable(testAppointmentDtoFullREJECTED.getRating()), Optional.ofNullable(-1));
        assertEquals(testAppointmentDtoFullREJECTED.getStartDate(), new Date(0));
        assertEquals(testAppointmentDtoFullREJECTED.getEndDate(), new Date(0));
    }

    @Test
    public void constructorFullTestValueTypesRejected(){
        assertEquals(testAppointmentDtoFullREJECTED.getId().getClass(), idValue.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getOwner().getClass(), ownerValue.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getSitter().getClass(), sitterValue.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getPetIds().getClass(), petIdsValue.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getType().getClass(), typeValueREJECTED.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFullREJECTED.getEndDate().getClass(), endDateValue.getClass());
    }
}
