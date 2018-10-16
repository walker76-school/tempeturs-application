import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {PetInfo} from 'js/info/petInfo';
import {PetForm} from 'js/forms/petForm';
import SitterList from 'js/account/components/sitterList';

class PetPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            content: '',
            id: ''
        };
        this.handleClick = this.handleClick.bind(this);
		this.handleAppointClick = this.handleAppointClick.bind(this);

    }

    handleClick(){
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
        let content;
        if(this.state.content === 'Form'){
            content = (<PetForm callBack={this.handleClick}/>);
        }
        // add another state of the page for appointment
        else if(this.state.content === 'Appointment') {
            content = (<SitterList zip={this.props.user.zip} id={this.state.id}/>);
        }
        else {
            if (this.props.user && this.props.user['petIds'] && this.props.user['petIds'].length > 0) {
                content = this.props.user['petIds'].map((i, index) => <PetInfo petKey={i} callBack ={this.handleAppointClick}/>);
            } else {
                content = (<h2>Looks like you don't have any pets yet</h2>);
            }
        }

        return (
            <div>
                <div className='addPetWrapper'>
                    {content}
                    <a className='link petLink' onClick={this.handleClick}>Add Pet</a>
                </div>
            </div>
        );
    }
}

PetPage = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state),
    })
)(PetPage);

export { PetPage };