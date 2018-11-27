import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/api/petAPI';
import * as Users from 'js/api/usersAPI';

class PetForm extends React.Component {

	constructor(props) {
		super(props);
		this.addPet = this.addPet.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

    onSubmit = pet => {
	    return this.props.registerPet(pet, this.addPet);
    };

    addPet = id => {
		let updatedUser = this.props.user;
		updatedUser['petIds'].push(id);
		this.props.addPet(updatedUser);
		this.props.callBack();
	};

    render() {
        let { handleSubmit, submitting } = this.props;

        return (
            <div>
                <form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
                    <Bessemer.Field name="name" friendlyName="Pet Name" format1=''
                                    validators={[Validation.requiredValidator]} />
                    <Bessemer.Field name="type" friendlyName="Pet Type" format1=''
                                    validators={[Validation.requiredValidator]} />
                    <Bessemer.Field name="bio" friendlyName="Pet Bio" format1=''
                                    validators={[Validation.requiredValidator]} />

                    <Bessemer.Button loading={submitting}>Register Pet</Bessemer.Button>
                </form>
                <Bessemer.Button className='link petlink' onClick={this.props.callBack}>Go Back</Bessemer.Button>
            </div>
    );
    }
}

PetForm = ReduxForm.reduxForm({form: 'pet'})(PetForm);

PetForm = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
    dispatch => ({
        registerPet: (pet, callback) => dispatch(PetAPI.Actions.registerPet(pet, callback)),
        addPet: user => dispatch(Users.Actions.update(user))
    })
)(PetForm);

export { PetForm };