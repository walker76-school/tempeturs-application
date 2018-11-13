import React from 'react';
import AppointmentComponent from 'js/account/components/appointmentComponent';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as Bessemer from 'js/alloy/bessemer/components';
import AppointmentForm from 'js/forms/appointmentForm';

const styles = theme => ({
	root: {
		width: '100%',
	},
});

class AppointmentPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            content: '',
            refresh: false
        };

        {/* Bind the showPetForm function so it knows about the state */}
        this.showAppointmentForm = this.showAppointmentForm.bind(this);
        this.showAppointments = this.showAppointments.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    showAppointmentForm(){
        this.setState({
            content: 'Form'
        });
    }

    showAppointments(){
        this.setState({
            content: ''
        });
    }

    refresh(){
        console.log('Refreshing AppointmentPage...');
        this.setState({
            content: '',
            refresh: !this.state.refresh
        });
    }

    render() {
		const { classes } = this.props;

		{/* Setup initial content */}
		let component;

        if(this.state.content === 'Form'){
            {/* If the content key is Form then render the PetForm */}
            component = (<AppointmentForm callBack={this.showAppointments}/>);
        } else {
            {/* If there are available sitters, then map them */
            }
            if (this.props.user && this.props.user.appointments.length > 0) {

                {/* Map each appointment to a new appointment component */
                }
                let tempContent = this.props.user.appointments.map((i, index) =>
                    <AppointmentComponent userType={this.props.user.type} id={i} index={index}/>
                );
                component = (
                    <div>
                        {tempContent}
                        <Bessemer.Button className='link appointmentlink' onClick={this.showAppointmentForm}>Add Appointment</Bessemer.Button>
                    </div>
                );
            } else {
                {/* If there aren't any pets then set it to the default message */
                }
                component = (
                    <div>
                        <div>You don't have any appointments.</div>
                        <Bessemer.Button className='link petlink' onClick={this.showAppointmentForm}>Add Appointment</Bessemer.Button>
                    </div>
                );
            }
        }

        return (
			<div className={classes.root}>
				{/* Display the content, either the default label or the list of appointments */}
				{component}
            </div>
        );
    }
}

AppointmentPage.propTypes = {
	classes: PropTypes.object.isRequired,
};

{/* Connect to the Redux store to have access to the user data */}
AppointmentPage = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(AppointmentPage);

export default withStyles(styles)(AppointmentPage);