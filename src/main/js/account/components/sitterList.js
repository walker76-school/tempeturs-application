import React from 'react';
import {getSitters} from 'js/api/appointmentAPI';
import SitterComponent from 'js/account/components/sitterComponent';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import * as AppointmentAPI from 'js/api/appointmentAPI';
import {withStyles} from '@material-ui/core';

class SitterList extends React.Component {

	constructor(props) {
		super(props);

		{/* Setup a property in the state to hold the list of sitters */}
		this.state = {
			sitters: ''
		};
	}

	componentDidMount(){

		let request = {
			startDate: this.props.start,
			endDate: this.props.end,
			addressLine: this.props.user.addressLine,
			city: this.props.user.city,
			state: this.props.user.state,
			zip: this.props.user.zip
		};

		{/* Call getSitters which is located in js/api/appointmentApi */}
		getSitters(request)
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}

					{/* Set the state to the response value, which is a list of possible sitters */}
					this.setState({
						sitters: response
					});
				}).catch((error) => {
			{/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
			  alert(error);
		});
	}

	render() {

		{/* Setup initial content */}
		let content = (<div>There are no sitters available</div>);

		{/* If there are available sitters, then map them */}
		if(this.state.sitters.length > 0){
			{/* Map each possible sitter to a new sitter component */}
			content = this.state.sitters.map((i, index) => {
				console.log(i);
				return (<SitterComponent key={index} sitter={i} callBack={this.props.callBack}/>);
			});
		}

		return (
            <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
				{/* Display the content, either the default label or the list of sitters */}
				{content}
			</div>
		);
	}
}

SitterList = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({

	})
)(SitterList);

export default (SitterList);