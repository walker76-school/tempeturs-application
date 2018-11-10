import React from 'react';
import { connect } from 'react-redux';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as PetAPI from 'js/api/petAPI';
import * as Users from 'js/api/usersAPI';
import {PetListComponent} from 'js/account/components/petListComponent';

class AppointmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.addAppointment = this.addAppointment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            pets: []
        };
    }

    onSubmit = appointment => {
        return this.props.registerAppointment(appointment, this.addAppointment);
    };

    addAppointment = id => {
        let updatedUser = this.props.user;
        updatedUser['appointments'].push(id);
        this.props.addAppointment(updatedUser);
        this.props.callBack();
    };

    enqueuePet = (id) => {
        this.state.pets.push(id);
        console.log('Enqueue: ' + id);
        console.log(this.state.pets);
    };

    dequeuePet = (id) => {
        console.log('Dequeue: ' + id);
        let temp = [];

        for( let i = 0; i < this.state.pets.length ; i++){
            if ( this.state.pets[i] !== id) {
                temp.push(this.state.pets[i]);
            }
        }
        console.log(temp);
        this.setState({
            pets: temp
        });
    };

    render() {
        let content;
        if(this.props.user.petIds.length <= 0){
            return(
              <div>
                  Please register some pets to make an appointment
                  <Bessemer.Button className='link petlink' onClick={this.props.callBack}>Go Back</Bessemer.Button>
              </div>
            );
        } else {
            if(this.props.user && this.props.user.petIds.length > 0){
                {/* Map each possible sitter to a new sitter component */}
                content = this.props.user.petIds.map((i, index) =>
                    <PetListComponent key={i} enqueue={this.enqueuePet} dequeue={this.dequeuePet} id={i}/>
                );
            }
        }

        return (
            <div>
                {content}
                <Bessemer.Button className='link petlink' onClick={this.props.callBack}>Go Back</Bessemer.Button>
            </div>
        );
    }
}

AppointmentForm = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state)
    }),
    dispatch => ({
        registerAppointment: (appointment, callback) => dispatch(PetAPI.Actions.registerPet(appointment, callback)),
        addAppointment: user => dispatch(Users.Actions.update(user))
    })
)(AppointmentForm);

export { AppointmentForm };