import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';

import * as Users from 'js/api/usersAPI';

class LoginForm extends React.Component {
    onSubmit = ({principal, password}) => {
        return this.props.authenticate(principal, password, this.props.callBack);
    };

    render() {
        let { handleSubmit, submitting } = this.props;

        return (
            <form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
                <Bessemer.Field name="principal" friendlyName="Email Address" format1= ' Format is X@X.com'
                                validators={[Validation.requiredValidator, Validation.emailValidator]} />

                <Bessemer.Field name="password" friendlyName="Password" format1 = ' Format is at least one of each of the following: lowercase letter, uppercase letter, number, and special character.'
                                validators={[Validation.requiredValidator, Validation.passwordValidator, Validation.passLongLengthValidator, Validation.passShortLengthValidator]}
                                field={<input className="form-control" type="password" />} />
                                {/*MN possibly add something a check box that changes the type of the password field to text*/}
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
        authenticate: (principal, password, callback) => dispatch(Users.Actions.authenticate(principal, password, callback))
    })
)(LoginForm);

export { LoginForm };
