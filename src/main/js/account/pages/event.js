import React, { Component } from 'react';
import {approveAppointment, getAppointment, rateAppointment, rejectAppointment, cancelAppointment} from 'js/api/appointmentAPI';
import PropTypes from 'prop-types';
import AppointmentPetComponent from 'js/account/components/appointmentPetComponent';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class EventComponent extends React.Component {

    constructor(props){
        super(props);
        {/* Setup an update state to reload the component on approval */}
        this.state = {
            start: 0,
            end: 0,
            title: '',
        };
    }

    componentWillMount(){
        {/* Call getSitters which is located in js/api/appointmentApi */}
        getAppointment(this.props.id)
            .then(
                (response) => {
                    {/*The .then waits for a response from the API and then executes the following code */}
                    console.log(response);

                    {/* Set the state to the response value, which is a list of possible sitters */}
                    this.setState({
                        appointment: response,
                        start: response['startDate'],
                        end: response['endDate'],
                        title: 'appointment with' + response['type'] + 'for' + response['petIds'],
                    });
                }).catch((error) => {
            {/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
            alert(error);
        });
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        let pets = this.state.petIds.map((i, index) => <AppointmentPetComponent key={index} petKey={i}/>);

        return (

                {
                    end: this.state.start,
                    start: this.state.end,
                    eventClasses: 'optionalEvent',
                    title: this.state.title,
                    description: 'This is a test description of an event',
                }

        );
    }
}


EventComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default (EventComponent);