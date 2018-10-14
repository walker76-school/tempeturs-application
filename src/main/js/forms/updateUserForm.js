import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';
import {getUserDetails} from 'js/api/usersAPI';

export default class UpdateUserForm extends React.Component {

	// Store the values in the state
	constructor(props) {
		super(props);
		this.state = {name: '', phoneNumber: ''};
	}

	// Update the user on submit
	onSubmit = user => {
		let updatedUser = this.props.user;

		if(user['name'] == null){
			updatedUser['name'] = this.state.name;
		} else {
			updatedUser['name'] = user['name'];
		}

		if(user['phoneNumber'] == null){
			updatedUser['phoneNumber'] = this.state.phoneNumber;
		}else {
			updatedUser['phoneNumber'] = user['phoneNumber'];
		}

		return this.props.updateUser(updatedUser);
	};

	render() {
		let { handleSubmit, submitting } = this.props;

		return (
			<form name='form' onSubmit={handleSubmit(form => this.onSubmit(form))}>
				<Bessemer.Field name='name' friendlyName='Name'
                                field={<input className="form-control" value={this.state.name}/>}
								validators={[]} />

				<Bessemer.Field name='phoneNumber' friendlyName='Phone Number'
                                    field={<input className="form-control" value={this.state.phoneNumber} />}
								validators={[]} />

				<Bessemer.Button loading={submitting}>Update</Bessemer.Button>
			</form>
		);
	}
}

UpdateUserForm = ReduxForm.reduxForm({form: 'form'})(UpdateUserForm);

UpdateUserForm = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		updateUser: user => dispatch(Users.Actions.update(user))
	})
)(UpdateUserForm);

export { UpdateUserForm };