import React from 'react';
import {getPet} from 'js/api/petAPI';
import {UpdatePetForm} from 'js/forms/updatePetForm';

class PetInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: '', name: '', type: '', editing: false};
		this.setEdit = this.setEdit.bind(this);
		this.renderForm = this.renderForm.bind(this);
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
				{this.renderForm()}
            </div>
        );
    }
}

export {PetInfo};