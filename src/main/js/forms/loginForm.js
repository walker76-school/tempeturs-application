import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';

import * as Users from 'js/api/usersAPI';

class LoginForm extends React.Component {
    onSubmit = ({principal, password}) => {
        var ret = this.props.authenticate(principal, password);
        this.props.callback();
        return ret;
    };

    render() {
        let { handleSubmit, submitting } = this.props;

        return (
            <form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
                <Bessemer.Field name="principal" friendlyName="Email Address"
                                validators={[Validation.requiredValidator, Validation.emailValidator]} />

                <Bessemer.Field name="password" friendlyName="Password"
                                validators={[Validation.requiredValidator, Validation.passwordValidator]} />

                <Bessemer.Button loading={submitting}>Sign In</Bessemer.Button>
            </form>
        );
    }
}

LoginForm = ReduxForm.reduxForm({form: 'login'})(LoginForm);

LoginForm = connect(
    state => ({

    }),
    dispatch => ({
        authenticate: (principal, password) => dispatch(Users.Actions.authenticate(principal, password))
    })
)(LoginForm);

export { LoginForm };
