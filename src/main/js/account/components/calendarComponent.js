import React, { Component } from 'react';
import Calendar from 'material-ui/DatePicker/Calendar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class CalendarComponent extends React.Component {

	render() {
		return (
            <MuiThemeProvider>
                <Calendar/>
            </MuiThemeProvider>
		);
	}
}