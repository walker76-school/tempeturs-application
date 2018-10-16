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
                <Bessemer.Field name="name" friendlyName="Name"
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Field name="principal" friendlyName="Email Address"
                                validators={[Validation.requiredValidator, Validation.emailValidator]} />

                <Bessemer.Field name="phoneNumber" friendlyName="Phone Number"
                                validators={[]} />

                <Bessemer.Field name="password" friendlyName="Password"
                                validators={[Validation.requiredValidator, Validation.passwordValidator]}
                                field={<input className="form-control" type="password" />} />
                <Bessemer.Field name="addressLine" friendlyName="Address Line"
                                validators={[]} />

                <Bessemer.Field name="city" friendlyName="City"
                                validators={[]} />

                <Bessemer.Field name="state" friendlyName="State"
                                validators={[]} />

                <Bessemer.Field name="zip" friendlyName="Zip Code"
                                validators={[]} />

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