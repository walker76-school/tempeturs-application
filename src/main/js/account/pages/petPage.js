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
            id: ''
        };

		{/* Bind the showPetForm function so it knows about the state */}
		this.showPetForm = this.showPetForm.bind(this);

        {/* Bind the handleAppointClick function so it knows about the state */}
		this.handleAppointClick = this.handleAppointClick.bind(this);
    }

    showPetForm(){
        this.setState({
			content: 'Form'
        });
    }

    handleAppointClick(id){
        this.setState({
			content: 'Appointment',
            id: id
        });
    }

    render() {
        {/* Define the content object */}
        let content;
        if(this.state.content === 'Form'){
			{/* If the content key is Form then render the PetForm */}
            content = (<PetForm refresh={this.props.refresh}/>);
        }
        else if(this.state.content === 'Appointment') {
			{/* If the content key is appointment then render the list of sitters */}
            content = (<SitterList refresh={this.props.refresh} zip={this.props.user.zip} id={this.state.id}/>);
        }
        else {
            {/* If the user is defined and there are pets then render all the pets*/}
            if (this.props.user && this.props.user['petIds'] && this.props.user['petIds'].length > 0) {
                content = this.props.user['petIds'].map((i, index) => <PetComponent petKey={i} callBack ={this.handleAppointClick}/>);
            } else {
				{/* If there aren't any pets then set it to the default message */}
                content = (<h2>Looks like you don't have any pets yet</h2>);
            }
        }

        return (
            <div>
                <div className='addPetWrapper'>
                    {content}
                    <Bessemer.Button className='link petLink' onClick={this.showPetForm}>Add Pet</Bessemer.Button>
                </div>
            </div>
        );
    }
}

{/* Connect to the Redux store to have access to the user data */}
PetPage = connect(
    state => ({
        user: Users.State.getUser(state),
    })
)(PetPage);

export { PetPage };