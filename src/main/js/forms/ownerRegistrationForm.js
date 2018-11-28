import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';

class OwnerRegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorCode: 0
        };
    }

    proceed = (user) => {
        return this.props.register(user, this.props.callBack, this.error);
    };

    error = () => {
        this.setState({
            errorCode: -1
        });
    };

    close = () => {
        this.setState({
            errorCode: 0
        });
    };

    onSubmit = user => {
        return this.props.checkUser(user, this.proceed, this.error);
    };

	render() {
		let { handleSubmit, submitting } = this.props;

		return (
            <div>
                <Dialog
                    open={this.state.errorCode < 0}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description' >
                    <DialogTitle id='alert-dialog-title'>Uh Oh!</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            Something went wrong while registering. A common reason for this is trying to register with an email that is already taken. Please verify your information is correct and try again.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.close} color='primary'>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
				<form name='form' onSubmit={handleSubmit(form => this.onSubmit(form))}>
					<Bessemer.Field name='name' friendlyName='Name' format1 = 'Format is First_Name Last_Name'
									validators={[Validation.requiredValidator]}
									field={<input className='form-control' type='text' placeholder='Name'/>} />

					<Bessemer.Field name='principal' friendlyName='Email Address' format1 = ' Format is X@X.com'
									validators={[Validation.requiredValidator, Validation.emailValidator]}
									field={<input className='form-control' type='text' placeholder='Email Address'/>} />

					<Bessemer.Field name='phoneNumber' friendlyName='Phone Number' format1 = ' Format is XXX-XXX-XXXX'
									validators={[Validation.requiredValidator, Validation.phoneValidator, Validation.phoneLengthValidator]}
									field={<input className='form-control' type='text' placeholder='Phone Number'/>}/>

					<Bessemer.Field name='password' friendlyName='Password' format1 = ' Format is at least one of each of the following: lowercase letter, uppercase letter, number, and special character.'
									validators={[Validation.requiredValidator, Validation.passwordValidator, Validation.passLongLengthValidator, Validation.passShortLengthValidator]}
									field={<input className='form-control' type='password' placeholder='Password'/>} />

					<Bessemer.Field name='addressLine' friendlyName='Address Line'
									validators={[Validation.requiredValidator]}
									field={<input className='form-control' type='text' placeholder='Address'/>} />

					<Bessemer.Field name='city' friendlyName='City'
									validators={[Validation.requiredValidator]}
									field={<input className='form-control' type='text' placeholder='City'/>}/>

					<Bessemer.Field name='state' friendlyName='State'   format1=' Format is the two letter capitalized abbreviation XX.'
									validators={[Validation.requiredValidator]}
									field={<input className='form-control' type='text' placeholder='State'/>}/>

					<Bessemer.Field name='zip' friendlyName='Zip Code' format1=' Format is XXXXX'
									validators={[Validation.requiredValidator, Validation.zipLengthValidator, Validation.zipValidator]}
									field={<input className='form-control' type='text' placeholder='Zip Code'/>}/>

					<Bessemer.Button loading={submitting}>Register</Bessemer.Button>
				</form>
            </div>
		);
	}
}

OwnerRegistrationForm = ReduxForm.reduxForm({form: 'register'})(OwnerRegistrationForm);

OwnerRegistrationForm = connect(
    state => ({

    }),
	dispatch => ({
        checkUser: (user, callback, errorCallback) => dispatch(Users.Actions.checkPrincipalAvailability(user, callback, errorCallback)),
        register: (user, callback, errorCallback) => dispatch(Users.Actions.registerOwner(user, callback, errorCallback))
	})
)(OwnerRegistrationForm);

export { OwnerRegistrationForm };