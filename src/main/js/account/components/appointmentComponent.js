import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

export default class AppointmentComponent extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
			<div>
				<label>Owner: {this.props.owner}</label>
				<label>Sitter: {this.props.sitter}</label>
				<label>Pet: {this.props.petId}</label>
				<label>Type: {this.props.type}</label>
				<a>Approve</a>
			</div>
        );
    }
}

AppointmentComponent = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(AppointmentComponent);

export { AppointmentComponent };