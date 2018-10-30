import React, { Component } from 'react';
import {approveAppointment} from 'js/api/appointmentAPI';

export default class AppointmentComponent extends React.Component {

	constructor(){
		super();
		{/* Setup an update state to reload the component on approval */}
		this.state = {
			update: false
		};
		{/* Bind the onClick function so it knows about the state */}
		this.onClick = this.onClick.bind(this);
	}

	onClick = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		approveAppointment(this.props.owner, this.props.sitter, this.props.petId);

		{/* Update the state to force a refresh */}
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