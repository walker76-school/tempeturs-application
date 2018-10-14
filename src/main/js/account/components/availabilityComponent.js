import React from 'react';
import Toggle from 'react-toggle';
import {getAvailability} from 'js/api/availabilityApi';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AvailabilityComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checkedVal: false
		};
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount(){
		getAvailability()
			.then(
				(response) => {
					this.setState({
						'checkedVal': response[this.props.day + this.props.name]
					}, function () {
						this.props.callBack(this.props.day + this.props.name, this.state.checkedVal);
					});
				}).catch((error) => {
			alert(error);
		});
	}

	onChange(){
		let alternate = !this.state.checkedVal;
		this.setState({
			checkedVal: alternate
		});

		this.props.callBack(this.props.day + this.props.name, alternate);
	}

	render() {
		return (
			<div>
				<label>{this.props.name}</label>
				<Toggle
					checked={this.state.checkedVal}
					onChange={this.onChange} />
			</div>
		);
	}
}


AvailabilityComponent = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(AvailabilityComponent);

export { AvailabilityComponent };