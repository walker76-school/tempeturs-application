import React from 'react';
import Toggle from 'react-toggle';
import {getAvailability} from 'js/api/availabilityApi';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AvailabilityComponent extends React.Component {

	constructor(props) {
		super(props);
		{/* Initialize the checkbox to be false, this makes our component managed*/}
		this.state = {
			checkedVal: this.props.initValue,
		};

		{/* Bind the onClick function so it knows about the state */}
		this.onClick = this.onClick.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {

		this.setState({
			checkedVal: nextProps['initValue']
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
				<label style={{width: 100}}>{this.props.name}:</label>
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