import React, { Component } from 'react';
import {makeAppointment} from 'js/api/appointmentAPI';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class SitterComponent extends React.Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick = () => {
		makeAppointment(this.props.user.principal, this.props.sitter['principal'], this.props.id);
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

SitterComponent = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	})
)(SitterComponent);

export { SitterComponent };