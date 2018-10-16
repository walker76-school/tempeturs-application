import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {approveAppointment} from 'js/api/appointmentAPI';

export default class AppointmentComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			update: false
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick = () => {
		approveAppointment(this.props.owner, this.props.sitter, this.props.petId);
		this.setState({
			update: !this.state.update
		});
	};

    render() {
        return (
			<div>
				<label>Owner: {this.props.owner}</label> <br/>
				<label>Sitter: {this.props.sitter}</label> <br/>
				<label>Pet: {this.props.petId}</label> <br/>
				<label>Type: {this.props.type}</label> <br/>
				{this.props.userType === 'SITTER' &&
					<button onClick={this.onClick}>Approve</button>
				}

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