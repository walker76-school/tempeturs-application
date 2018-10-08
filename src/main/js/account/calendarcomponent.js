import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

export default class CalendarComponent extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			date: '',
		};
	}

	onChange = (date) => {
		console.log(date);
		this.setState({ date: date.toString() });
	};

	render() {
		return (
			<div>
				Calendar
			</div>
		);
	}
}