import React from 'react';
import Calendar from 'material-ui/DatePicker/Calendar';
import DatePicker from 'material-ui-datetimepicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
//import { withStyles } from '@material-ui/core/styles';


class CalendarPage extends React.Component {

    state = {
        dateTime: null
    }

    setDate = (dateTime) => this.setState({dateTime})

    render() {
        return (
            <MuiThemeProvider>
                <Calendar
                    value={new Date()} // picker value moment/string/number/js Date
                    format='MMM DD, YYYY hh:mm A'
                    timePickerDelay={150}
                    returnMomentDate={false} // if true will return moment object
                    className='datetime-container'
                    textFieldClassName='datetime-input'
                    name='picker' // form value name
                    datePickerMode='landscape' // or landscape
                    openToYearSelection={false}
                    disableYearSelection={false}
                    hideCalendarDate={false}
                    firstDayOfWeek={1}
                    minutesStep={1}
                    showCurrentDateByDefault={false}
                   // clearIcon={<ClearIcon/>} // set null to not render nothing
                    // available callbacks
                    onChange={() => {
                    }}
                    onTimePickerShow={() => {
                    }}
                    onDatePickerShow={() => {
                    }}
                    onDateSelected={() => {
                    }}
                    onTimeSelected={() => {
                    }}
                    shouldDisableDate={() => {
                    }}
                    DatePicker={DatePickerDialog}
                    TimePicker={TimePickerDialog}
                    // styles

                    clearIconStyle={{}}
                    textFieldStyle={{}}
                    style={{}} // root
                    timePickerBodyStyle={{}}
                    fullWidth={true}

                />
            </MuiThemeProvider>
        );
    }
}

export default (CalendarPage);