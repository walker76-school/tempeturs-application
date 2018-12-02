package petfinder.site.test.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import petfinder.site.common.availability.AvailabilityDto;

import static org.junit.Assert.assertEquals;

@RunWith(JUnit4.class)
public class AvailabilityDtoTest {

    //variables used for testing in later tests
    private AvailabilityDto testAvailabilityDtoTrue = new AvailabilityDto(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    private AvailabilityDto testAvailabilityDtoFalse = new AvailabilityDto(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
    private boolean testAvailabilityDtoTrueValue = true;
    private boolean testAvailabilityDtoFalseValue = false;

    @Test
    public void constructorTestSetValuesTrue() {

        //tests for days of the week
        //sunday
        assertEquals(testAvailabilityDtoTrue.isSundayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isSundayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isSundayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isSundayEvening(), testAvailabilityDtoTrueValue);

        //monday
        assertEquals(testAvailabilityDtoTrue.isMondayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isMondayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isMondayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isMondayEvening(), testAvailabilityDtoTrueValue);

        //tuesday
        assertEquals(testAvailabilityDtoTrue.isTuesdayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isTuesdayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isTuesdayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isTuesdayEvening(), testAvailabilityDtoTrueValue);

        //wednesday
        assertEquals(testAvailabilityDtoTrue.isWednesdayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isWednesdayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isWednesdayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isWednesdayEvening(), testAvailabilityDtoTrueValue);

        //thursday
        assertEquals(testAvailabilityDtoTrue.isThursdayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isThursdayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isThursdayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isThursdayEvening(), testAvailabilityDtoTrueValue);

        //friday
        assertEquals(testAvailabilityDtoTrue.isFridayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isFridayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isFridayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isFridayEvening(), testAvailabilityDtoTrueValue);

        //saturday
        assertEquals(testAvailabilityDtoTrue.isSaturdayMorning(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isSaturdayMidday(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isSaturdayAfternoon(), testAvailabilityDtoTrueValue);
        assertEquals(testAvailabilityDtoTrue.isSaturdayEvening(), testAvailabilityDtoTrueValue);
    }

    @Test
    public void constructorTestSetValuesFalse() {

        //tests for days of the week
        //sunday
        assertEquals(testAvailabilityDtoFalse.isSundayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isSundayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isSundayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isSundayEvening(), testAvailabilityDtoFalseValue);

        //monday
        assertEquals(testAvailabilityDtoFalse.isMondayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isMondayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isMondayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isMondayEvening(), testAvailabilityDtoFalseValue);

        //tuesday
        assertEquals(testAvailabilityDtoFalse.isTuesdayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isTuesdayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isTuesdayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isTuesdayEvening(), testAvailabilityDtoFalseValue);

        //wednesday
        assertEquals(testAvailabilityDtoFalse.isWednesdayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isWednesdayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isWednesdayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isWednesdayEvening(), testAvailabilityDtoFalseValue);

        //thursday
        assertEquals(testAvailabilityDtoFalse.isThursdayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isThursdayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isThursdayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isThursdayEvening(), testAvailabilityDtoFalseValue);

        //friday
        assertEquals(testAvailabilityDtoFalse.isFridayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isFridayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isFridayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isFridayEvening(), testAvailabilityDtoFalseValue);

        //saturday
        assertEquals(testAvailabilityDtoFalse.isSaturdayMorning(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isSaturdayMidday(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isSaturdayAfternoon(), testAvailabilityDtoFalseValue);
        assertEquals(testAvailabilityDtoFalse.isSaturdayEvening(), testAvailabilityDtoFalseValue);
    }
}