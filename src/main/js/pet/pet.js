import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/pet/petAPI';

class PetForm extends React.Component {
    onSubmit = pet => {
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

    }),
    dispatch => ({
        registerPet: pet => dispatch(PetAPI.Actions.registerPet(pet))
    })
)(PetForm);

export { PetForm };