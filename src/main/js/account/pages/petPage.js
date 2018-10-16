import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {PetInfo} from 'js/info/petInfo';
import {PetForm} from 'js/forms/petForm';
import {PetAppointmentForm} from "js/forms/petAppointmentForm";
import SitterList from "js/account/components/sitterList";

class PetPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            appoint: false,
            form: false
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.setState({
           form: !this.state.form
        });
    }
    handleAppointClick(){
        this.setState({
            appoint: !this.state.appoint
        })
    }

    render() {
        let content;
        if(this.state.form){
            content = (<PetForm callBack={this.handleClick}/>);
        }
        // add another state of the page for appointment
        else if(this.state.appoint) {
            content  = (<SitterList callback = {this.handleAppointClick}/>);
        }
        else {
            if (this.props.user && this.props.user['petIds'] && this.props.user['petIds'].length > 0) {
                content = this.props.user['petIds'].map((i, index) => <PetInfo petKey={i}/>);
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