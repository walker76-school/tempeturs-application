import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';

import * as Users from 'js/api/usersAPI';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';

class LoginForm extends React.Component {

    //constructor for LoginForm
    constructor(props) {
        super(props);
        this.state = {
            errorCode: 0
        };
    }

    //function called when user clicks submit
    onSubmit = ({principal, password}) => {
        console.log('About to see if the user exists...');
        //check if user does not exist
        return this.props.authLogin(principal, password, this.props.callBack, this.setError);
    };

    //function to set errorCode back to 0 after displaying an error message
    setError = () => {
        this.setState({
            errorCode: -1
        });
    };

    //function to set errorCode back to 0 after displaying an error message
    errorClose = () => {
        this.setState({
            errorCode: 0
        });
    };

    //render the page
    render() {
        let { handleSubmit, submitting } = this.props;

        //error dialog to display only if error is set
        let errorDialog = (
            <div>
                <Dialog
                    open={this.state.errorCode < 0}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                >
                    <DialogTitle id='alert-dialog-title'>Uh Oh!</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            No match found for the username/password combination you provided. Please make sure your information is correct and try again.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.errorClose} color='primary'>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

        //the page to display
        return (
            <div>
                {errorDialog}
                <br/>

                <form name='form' onSubmit={handleSubmit(form => this.onSubmit(form))}>

                    <Bessemer.Field name='principal' friendlyName='Email Address' format1= ' Format is X@X.com'
                                    validators={[Validation.requiredValidator, Validation.emailValidator]}
                                    field={<input className='form-control' type='text' placeholder='Email Address'/>}  />

                    <Bessemer.Field name='password' friendlyName='Password' format1 = ' Format is at least one of each of the following: lowercase letter, uppercase letter, number, and special character.'
                                    validators={[Validation.requiredValidator, Validation.passwordValidator, Validation.passLongLengthValidator, Validation.passShortLengthValidator]}
                                    field={<input className='form-control' type='password' placeholder='Password'/>} />
                                    {/*MN possibly add something a check box that changes the type of the password field to text*/}
                    <Bessemer.Button loading={submitting}>Sign In</Bessemer.Button>
                </form>
            </div>
        );
    }
}

LoginForm = ReduxForm.reduxForm({form: 'login'})(LoginForm);

LoginForm = connect(
    state => ({

    }),
    dispatch => ({
        authLogin: (principal, password, callback, errorCallBack) => dispatch(Users.Actions.authLogin(principal, password, callback, errorCallBack))
    })
)(LoginForm);

export { LoginForm };
