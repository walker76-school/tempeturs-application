import React from 'react';
import Calendar from 'material-ui/DatePicker/Calendar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class CalendarPage extends React.Component {


    render() {
        return (

            <div>

                <MuiThemeProvider>
                    <Calendar/>
                </MuiThemeProvider>
            </div>

        );
    }
}