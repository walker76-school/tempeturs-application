import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';
import {getUserDetails} from 'js/api/usersAPI';
import * as Validation from "js/alloy/utils/validation";

export default class UpdateUserForm extends React.Component {

	// Store the values in the state
	constructor(props) {
		super(props);
		this.state = {name: '', phoneNumber: '', addressLine: '', city: '', state:'', zip:''};
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
        if(user['addressLine'] == null){
            updatedUser['addressLine'] = this.state.addressLine;
        }else {
            updatedUser['addressLine'] = user['addressLine'];
        }

        if(user['city'] == null){
            updatedUser['city'] = this.state.city;
        }else {
            updatedUser['city'] = user['city'];
        }

        if(user['state'] == null){
            updatedUser['state'] = this.state.state;
        }else {
            updatedUser['state'] = user['state'];
        }
        if(user['zip'] == null){
            updatedUser['zip'] = this.state.zip;
        }else {
            updatedUser['zip'] = user['zip'];
        }

		return this.props.updateUser(updatedUser);
	};

	render() {
		let { handleSubmit, submitting } = this.props;

		return (
			<form name='form' onSubmit={handleSubmit(form => this.onSubmit(form))}>
				<Bessemer.Field name='name' friendlyName='Name'
                                field={<input className="form-control" value={this.state.name}/>}
								validators={[Validation.requiredValidator]} />

				<Bessemer.Field name='phoneNumber' friendlyName='Phone Number'
                                    field={<input className="form-control" value={this.state.phoneNumber} />}
								validators={[Validation.requiredValidator, Validation.phoneValidator, Validation.phoneLengthValidator]} />

                <Bessemer.Field name='addressLine' friendlyName='Address Line'
                                field={<input className="form-control" value={this.state.addressLine} />}
                                validators={[Validation.requiredValidator]} />
                <Bessemer.Field name='city' friendlyName='City'
                                field={<input className="form-control" value={this.state.city} />}
                                validators={[Validation.requiredValidator]} />
                <Bessemer.Field name='state' friendlyName='State'
                                field={<input className="form-control" value={this.state.state} />}
                                validators={[Validation.requiredValidator]} />
                <Bessemer.Field name='zip' friendlyName='Zip'
                                field={<input className="form-control" value={this.state.zip} />}
                                validators={[Validation.requiredValidator, Validation.zipLengthValidator, Validation.zipValidator]} />

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