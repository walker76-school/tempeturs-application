import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {PetForm} from 'js/forms/petForm';
import SitterList from 'js/account/components/sitterList';
import PetComponent from 'js/account/components/petComponent';
import * as Bessemer from 'js/alloy/bessemer/components';

class PetPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            content: '',
            id: '',
            refresh: false
        };

		{/* Bind the showPetForm function so it knows about the state */}
		this.showPetForm = this.showPetForm.bind(this);
        this.showPets = this.showPets.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    showPetForm(){
        this.setState({
			content: 'Form'
        });
    }

    showPets(){
        this.setState({
            content: ''
        });
    }

    refresh(){
        console.log('Refreshing PetPage...');
        this.setState({
            content: '',
            refresh: !this.state.refresh
        });
    }

    render() {
        {/* Define the content object */}
        let content;
        if(this.state.content === 'Form'){
			{/* If the content key is Form then render the PetForm */}
            content = (<PetForm callBack={this.showPets}/>);
        }
        else if(this.state.content === 'Appointment') {
			{/* If the content key is appointment then render the list of sitters */}
            content = (<SitterList refresh={this.props.refresh} zip={this.props.user.zip} id={this.state.id}/>);
        }
        else {
            {/* If the user is defined and there are pets then render all the pets*/}
            if (this.props.user && this.props.user['petIds'] && this.props.user['petIds'].length > 0) {
                let tempContent = this.props.user['petIds'].map((i, index) => <PetComponent petKey={i} callBack={this.refresh}/>);
                content = (
                    <div>
                        {tempContent}
                        <Bessemer.Button className='link petlink' onClick={this.showPetForm}>Add Pet</Bessemer.Button>
                    </div>
                );
            } else {
				{/* If there aren't any pets then set it to the default message */}
                content = (
                    <div>
                        <div>You don't have any pets.</div>
                        <Bessemer.Button className='link petlink' onClick={this.showPetForm}>Add Pet</Bessemer.Button>
                    </div>
                );
            }
        }

        return (
            <div>
                <div className='addPetWrapper'>
                    {content}
                </div>
            </div>
        );
    }
}

{/* Connect to the Redux store to have access to the user data */}
PetPage = connect(
    state => ({
        user: Users.State.getUser(state),
    }),
    dispatch => ({

    })
)(PetPage);

export { PetPage };