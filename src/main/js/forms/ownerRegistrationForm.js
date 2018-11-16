import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';

export default class OwnerRegistrationForm extends React.Component {
    //user is the object that gets created from this form
	onSubmit = user => {
		console.log(user);
		//this.props.callback is how you access what you passed to the component
		return this.props.register(user, this.props.callBack);
	};
    /*  Field phone number, address line, city, and state do not have validators
    *       Implement state as a drop down menu*/
	render() {
		let { handleSubmit, submitting } = this.props;

		/*html form
			 bessemer makes it pretty
             when you have a form you need it to map to a form in java- name does that
             you need the name to match up
             these feilds needs to match up exactly with java object feilds
             in UserService.java*/
		return (
			<form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
				<Bessemer.Field name="name" friendlyName="Name" format1 = 'First_Name Last_Name'
								validators={[Validation.requiredValidator]} />

				<Bessemer.Field name="principal" friendlyName="Email Address" format1 = "X@X.com"
								validators={[Validation.requiredValidator, Validation.emailValidator]} />

				<Bessemer.Field name="phoneNumber" friendlyName="Phone Number" format1 = "XXX-XXX-XXXX"
								validators={[Validation.requiredValidator, Validation.phoneValidator, Validation.phoneLengthValidator]} />

				<Bessemer.Field name="password" friendlyName="Password" format1 = "at least one of each of the following: lowercase letter, uppercase letter, number, special character."
								validators={[Validation.requiredValidator, Validation.passwordValidator, Validation.passLongLengthValidator, Validation.passShortLengthValidator]}
								field={<input className="form-control" type="password" />} />
                <Bessemer.Field name="addressLine" friendlyName="Address Line" format1 =''
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="city" friendlyName="City"
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="state" friendlyName="State" format1='Two letter capitalized abbreviation XX.'
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="zip" friendlyName="Zip Code" format1='XXXXX'
                                validators={[Validation.requiredValidator, Validation.zipLengthValidator, Validation.zipValidator]} />

				<Bessemer.Button loading={submitting}>Register</Bessemer.Button>
			</form>
		);
	}
}

//this reduces form - need to do it
//makes object out of form
OwnerRegistrationForm = ReduxForm.reduxForm({form: 'register'})(OwnerRegistrationForm);

//this is how you connect to redux
//using this for authentication token and user object
//how you get access to that bucket and start pull stuff out of it
OwnerRegistrationForm = connect(
	state => ({

	}),
	//these functions you access with props
	dispatch => ({
		register: (user, callback) => dispatch(Users.Actions.registerOwner(user, callback))
	})
)(OwnerRegistrationForm);

export { OwnerRegistrationForm };