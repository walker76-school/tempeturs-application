import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';

class SitterRegistrationForm extends React.Component {
    onSubmit = user => {
    	console.log(user);
        return this.props.register(user, this.props.callBack);
    };
    /*  Field phone number, address line, city, and state do not have validators
    *       Implement state as a drop down menu*/
    render() {
        let { handleSubmit, submitting } = this.props;

        return (
            <form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
                <Bessemer.Field name="name" friendlyName="Name" format1 = "Format is First_Name Last_Name"
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="principal" friendlyName="Email Address" format1 = ' Format is X@X.com'
                                validators={[Validation.requiredValidator, Validation.emailValidator]} />

                <Bessemer.Field name="phoneNumber" friendlyName="Phone Number" format1 = ' Format is XXX-XXX-XXXX'
                                validators={[Validation.requiredValidator, Validation.phoneValidator, Validation.phoneLengthValidator]} />

                <Bessemer.Field name="password" friendlyName="Password" format1 = ' Format is at least one of each of the following: lowercase letter, uppercase letter, number, and special character.'
                                validators={[Validation.requiredValidator, Validation.passwordValidator, Validation.passLongLengthValidator, Validation.passShortLengthValidator]}
                                field={<input className="form-control" type="password" />} />
                <Bessemer.Field name="addressLine" friendlyName="Address Line"
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="city" friendlyName="City"
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="state" friendlyName="State"   format1=' Format is the two letter capitalized abbreviation XX.'
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="zip" friendlyName="Zip Code" format1=' Format is XXXXX'
                                validators={[Validation.requiredValidator, Validation.zipLengthValidator, Validation.zipValidator]} />

                <Bessemer.Button loading={submitting}>Register</Bessemer.Button>
            </form>
        );
    }
}

SitterRegistrationForm = ReduxForm.reduxForm({form: 'register'})(SitterRegistrationForm);

SitterRegistrationForm = connect(
    state => ({

    }),
    dispatch => ({
        register: (user, callback) => dispatch(Users.Actions.registerSitter(user, callback))
    })
)(SitterRegistrationForm);

export { SitterRegistrationForm };