import React from 'react';
import {getPet} from 'js/api/petAPI';
import {UpdatePetForm} from 'js/forms/updatePetForm';
import * as Users from 'js/api/usersAPI';
import {connect} from 'react-redux';

class PetInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: '', name: '', type: '', editing: false};
		this.setEdit = this.setEdit.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.deletePet = this.deletePet.bind(this);
    }

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

    deletePet(){
		let updatedUser = this.props.user;

		for( let i = 0; i < updatedUser['petIds'].length - 1; i++){
			if ( updatedUser['petIds'][i] === this.props.petKey) {
				updatedUser['petIds'].splice(i, 1);
			}
		}

		return this.props.updateUser(updatedUser);
	}

    setEdit(){
    	let b = !(this.state.editing);
		this.setState({
			editing: b
		});
	}

    renderForm(){
    	if(this.state.editing){
    		return (<UpdatePetForm petKey={this.props.petKey}/>);
		}
	}

    render() {
        return (
            <div>
                <label>Welcome, {this.state.name}! Your id is {this.state.id} and your type is {this.state.type}</label>
				<button onClick={this.setEdit}>Toggle Edit</button>
				<button onClick={this.deletePet}>Delete</button>
				{this.renderForm()}
            </div>
        );
    }
}

PetInfo = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		updateUser: user => dispatch(Users.Actions.update(user))
	})
)(PetInfo);


export {PetInfo};