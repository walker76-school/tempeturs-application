import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';
import {Redirect} from 'react-router-dom';

class OwnerRegistrationForm extends React.Component {
	onSubmit = user => {
		console.log(user);
		return this.props.register(user, this.props.callBack);
	};

	render() {
		let { handleSubmit, submitting } = this.props;

		return (
			<form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
				<Bessemer.Field name="name" friendlyName="Name"
								validators={[Validation.requiredValidator]} />

				<Bessemer.Field name="principal" friendlyName="Email Address"
								validators={[Validation.requiredValidator, Validation.emailValidator]} />

				<Bessemer.Field name="phoneNumber" friendlyName="Phone Number"
								validators={[]} />

				<Bessemer.Field name="password" friendlyName="Password"
								validators={[Validation.requiredValidator, Validation.passwordValidator]}
								field={<input className="form-control" type="password" />} />

				<Bessemer.Button loading={submitting}>Register</Bessemer.Button>
			</form>
		);
	}
}

OwnerRegistrationForm = ReduxForm.reduxForm({form: 'register'})(OwnerRegistrationForm);

OwnerRegistrationForm = connect(
	state => ({

	}),
	dispatch => ({
		register: (user, callback) => dispatch(Users.Actions.registerOwner(user, callback))
	})
)(OwnerRegistrationForm);

export { OwnerRegistrationForm };