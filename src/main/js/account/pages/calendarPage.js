import React from 'react';
import Calendar from 'material-ui/DatePicker/Calendar';
import DatePicker from 'material-ui-datetimepicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import {createMuiTheme} from '@material-ui/core/styles/index';
//import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    datePicker: {
        color: '#FFFFFF',
        textColor: '#FFFFFF',
        calendarTextColor: '#FFFFFF',
        selectColor: '#FFFFFF',
        selectTextColor: '#FFFFFF',
        calendarYearBackgroundColor: '#FFFFFF',
        headerColor: '#FFFFFF',
    }
});

class CalendarPage extends React.Component {

    state = {
        dateTime: new Date()
    }

    setDate = (dateTime) => this.setState({
        dateTime: new Date(dateTime)
    });

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <DatePicker
                    value={this.state.dateTime} // picker value moment/string/number/js Date
                    format='MMM DD, YYYY HH:mm'
                    timePickerDelay={150}
                    returnMomentDate={true} // if true will return moment object
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
                    onChange={(date) => this.setDate(date)}
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

                    clearIconStyle={theme}
                    textFieldStyle={theme}
                    style={{theme}}// root
                    timePickerBodyStyle={theme}
                    fullWidth={true}

                />
            </MuiThemeProvider>
        );
    }
}

export default (CalendarPage);