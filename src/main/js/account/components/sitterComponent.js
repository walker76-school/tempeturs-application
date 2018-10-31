import React, { Component } from 'react';
import {makeAppointment} from 'js/api/appointmentAPI';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class SitterComponent extends React.Component {

	constructor() {
		super();

		{/* Bind the onClick function so it knows about the state */}
		this.onClick = this.onClick.bind(this);
	}

	onClick = () => {
		{/* Call makeAppointment which is located in js/api/appointmentApi
		  * This uses values passed in the constructor and from the Redux store
		  */}
		makeAppointment(this.props.user.principal, this.props.sitter['principal'], this.props.id);

		console.log('refreshing');
		this.props.refresh();
	};

	render() {
		return (
			<div>
				<br/>
				<label>Name: {this.props.sitter['name']}</label> <br/>
				<label>Email: {this.props.sitter['principal']}</label> <br/>
				<label>Phone Number: {this.props.sitter['phoneNumber']}</label> <br/>
				<button onClick={this.onClick}>Book Sitter</button>
			</div>
		);
	}
}

{/* Connect to the Redux store to have access to the user data */}
SitterComponent = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(SitterComponent);

export { SitterComponent };