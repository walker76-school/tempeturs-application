import React from 'react';
import Toggle from 'react-toggle';
import {getAvailability} from 'js/api/availabilityApi';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AvailabilityComponent extends React.Component {

	constructor() {
		super();
		{/* Initialize the checkbox to be false, this makes our component managed*/}
		this.state = {
			checkedVal: false
		};

		{/* Bind the onClick function so it knows about the state */}
		this.onClick = this.onClick.bind(this);
	}

	componentWillMount(){
		{/* This calls the getAvailability which is located in js/api/availabilityAPI */}
		getAvailability()
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}

					{/* Set the state to the response value, either true or false */}
					this.setState({
						'checkedVal': response[this.props.day + this.props.name]
					}, function () {
						{/* This is a callback function to the setState.
						  * Sometimes the state doesn't fully update immediately but by adding a callback function, we
						  * can make sure that the following code is only called once the state is actually updated
						  */}

						{/* Call the callBack function to update the parent state in availabilityPage.
						  * The callBack function is passed in when we use this component in availabilityPage.
						  * We concat the day and name to create a key like 'MondayEvening'.
						  */}
						this.props.callBack(this.props.day + this.props.name, this.state.checkedVal);
					});
				}).catch((error) => {
			{/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
			alert(error);
		});
	}

	onClick(){
		{/* Store the value of the inverse value to update the component */}
		let alternate = !this.state.checkedVal;

		{/* Swap the value in the state to force a re-render and show the updates */}
		this.setState({
			checkedVal: alternate
		});

		{/* Call the callBack function to update the parent state in availabilityPage */}
		this.props.callBack(this.props.day + this.props.name, alternate);
	}

	render() {
		return (
			<div>
				{/* This is just a label with the name, e.x. "Evening" */}
				<label>{this.props.name}</label>
				{/* This is a toggle component from the npm package react-toggle.
				  * This is used to render a toggle button.
				  * We also need to use the toggle.css for this component
				  * TODO - Clean up the toggle.css and remove anything unnecessary
				  */}
				<Toggle
					checked={this.state.checkedVal}
					onChange={this.onClick} />
			</div>
		);
	}
}

{/* Connect to the Redux store to have access to the user data */}
AvailabilityComponent = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(AvailabilityComponent);

{/* Export the component */}
export { AvailabilityComponent };