import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/api/petAPI';
import * as Users from 'js/api/usersAPI';

class PetForm extends React.Component {
    onSubmit = pet => {
        let updatedUser = this.props.user;
        updatedUser['petIds'].push(pet['id']);
        this.props.addPet(updatedUser);
        return this.props.registerPet(pet);
    };

    render() {
        let { handleSubmit, submitting } = this.props;

        return (
            <form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
                <Bessemer.Field type="number" name="id" friendlyName="ID"
                                validators={[Validation.requiredValidator]} />
                <Bessemer.Field name="name" friendlyName="Pet Name"
                                validators={[Validation.requiredValidator]} />
                <Bessemer.Field name="type" friendlyName="Pet Type"
                                validators={[Validation.requiredValidator]} />

                <Bessemer.Button loading={submitting}>Register Pet</Bessemer.Button>
            </form>
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
        registerPet: pet => dispatch(PetAPI.Actions.registerPet(pet)),
        addPet: user => dispatch(Users.Actions.update(user))
    })
)(PetForm);

export { PetForm };