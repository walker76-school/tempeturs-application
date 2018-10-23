import React from 'react';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

import * as Validation from 'js/alloy/utils/validation';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/api/petAPI';
import {getPet} from 'js/api/petAPI';

class UpdatePetForm extends React.Component {

	// Store the values in the state
	constructor(props) {
		super(props);
		this.state = {id: '', name: '', type: ''};
	}

	// We load up the pet info to auto fill in the form
	componentDidMount() {
		getPet(this.props.petKey)
			.then(
				(response) => {
					this.setState({
						id: response['id'],
						name: response['name'],
						type: response['type']
					});
				}).catch((error) => {
			alert(error);
		});
	}
	
	// Update the pet on submit
	onSubmit = pet => {
		if(pet['name'] == null){
			pet['name'] = this.state.name;
		}

		if(pet['type'] == null){
			pet['type'] = this.state.type;
		}

		pet['id'] = this.state.id;

		return this.props.updatePet(pet);
	};

	render() {
		let { handleSubmit, submitting } = this.props;

		return (
			<form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
				<Bessemer.Field name="name" friendlyName="Pet Name"
								validators={[Validation.requiredValidator]}
								field={<input className="form-control" placeholder={this.state.name} />}/>

				<Bessemer.Field name="type" friendlyName="Pet Type"
								validators={[Validation.requiredValidator]}
								field={<input className="form-control" placeholder={this.state.type} />}/>

				<Bessemer.Button loading={submitting}>Save</Bessemer.Button>
			</form>
		);
	}
}

UpdatePetForm = ReduxForm.reduxForm({form: 'pet'})(UpdatePetForm);

UpdatePetForm = connect(
	state => ({

	}),
	dispatch => ({
		updatePet: pet => dispatch(PetAPI.Actions.updatePet(pet))
	})
)(UpdatePetForm);

export { UpdatePetForm };