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
    private AppointmentDto testAppointmentDtoFull = new AppointmentDto(0L, "owner", "sitter", new ArrayList<>(), UserDao.AppointmentType.PENDING, -1, new Date(0), new Date(0));
    private Long idValue = 0L;
    private String ownerValue = "owner";
    private String sitterValue = "sitter";
    private List<Long> petIdsValue = new ArrayList<>();
    private UserDao.AppointmentType typeValue = UserDao.AppointmentType.PENDING;
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
        assertEquals(testAppointmentDtoFunctional.getType().getClass(), typeValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFunctional.getEndDate().getClass(), endDateValue.getClass());
    }

    @Test
    public void constructorFullTestSetValues(){
        assertEquals(Optional.ofNullable(testAppointmentDtoFull.getId()), Optional.ofNullable(0L));
        assertEquals(testAppointmentDtoFull.getOwner(), "owner");
        assertEquals(testAppointmentDtoFull.getSitter(), "sitter");
        assertEquals(testAppointmentDtoFull.getPetIds(), new ArrayList<>());
        assertEquals(testAppointmentDtoFull.getType(), UserDao.AppointmentType.PENDING);
        assertEquals(Optional.ofNullable(testAppointmentDtoFull.getRating()), Optional.ofNullable(-1));
        assertEquals(testAppointmentDtoFull.getStartDate(), new Date(0));
        assertEquals(testAppointmentDtoFull.getEndDate(), new Date(0));
    }

    @Test
    public void constructorFullTestValueTypes(){
        assertEquals(testAppointmentDtoFull.getId().getClass(), idValue.getClass());
        assertEquals(testAppointmentDtoFull.getOwner().getClass(), ownerValue.getClass());
        assertEquals(testAppointmentDtoFull.getSitter().getClass(), sitterValue.getClass());
        assertEquals(testAppointmentDtoFull.getPetIds().getClass(), petIdsValue.getClass());
        assertEquals(testAppointmentDtoFull.getType().getClass(), typeValue.getClass());
        assertEquals(testAppointmentDtoFull.getRating().getClass(), ratingValue.getClass());
        assertEquals(testAppointmentDtoFull.getStartDate().getClass(), startDateValue.getClass());
        assertEquals(testAppointmentDtoFull.getEndDate().getClass(), endDateValue.getClass());
    }

}
