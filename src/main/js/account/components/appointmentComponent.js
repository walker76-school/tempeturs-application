import React, { Component } from 'react';
import {approveAppointment, getAppointment, rejectAppointment} from 'js/api/appointmentAPI';

export default class AppointmentComponent extends React.Component {

	constructor(){
		super();
		{/* Setup an update state to reload the component on approval */}
		this.state = {
			update: false,
			appointment: ''
		};
		{/* Bind the onClick functions so they know about the state */}
		this.onClickApprove = this.onClickApprove.bind(this);
		this.onClickReject = this.onClickReject.bind(this);
	}

	componentWillMount(){
		{/* Call getSitters which is located in js/api/appointmentApi */}
		getAppointment(this.props.id)
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}

					{/* Set the state to the response value, which is a list of possible sitters */}
					this.setState({
						appointment: response
					});
				}).catch((error) => {
			{/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
			alert(error);
		});
	}

	onClickApprove = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		approveAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update
		});
	};

	onClickReject = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		rejectAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update
		});
	};

    render() {
        return (
			<div>
				<label>Owner: {this.state.appointment.owner}</label> <br/>
				<label>Sitter: {this.state.appointment.sitter}</label> <br/>
				<label>Pet: {this.state.appointment.petId}</label> <br/>
				<label>Type: {this.state.appointment.type}</label> <br/>
				{this.props.userType === 'SITTER' && this.state.appointment.type === 'PENDING' &&
					<button onClick={this.onClickApprove}>Approve</button>
				}

				{this.props.userType === 'SITTER' && this.state.appointment.type === 'PENDING' &&
					<button onClick={this.onClickReject}>Reject</button>
				}

			</div>
        );
    }
}