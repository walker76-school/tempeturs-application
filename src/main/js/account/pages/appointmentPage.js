import React from 'react';
import AppointmentComponent from 'js/account/components/appointmentComponent';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as Bessemer from 'js/alloy/bessemer/components';

const styles = theme => ({
	root: {
		width: '100%',
	},
});

class AppointmentPage extends React.Component {

    render() {
		const { classes } = this.props;

		{/* Setup initial content */}
		let component = (<div>You don't have any appointments.</div>);

		{/* If there are available sitters, then map them */}
		if(this.props.user && this.props.user.appointments.length > 0){

			{/* Map each appointment to a new appointment component */}
			component = this.props.user.appointments.map((i, index) =>
				<AppointmentComponent userType={this.props.user.type} id={i} index={index}/>
			);
		}

        return (
			<div className={classes.root}>
				{/* Display the content, either the default label or the list of appointments */}
				{component}
                <Bessemer.Button className='link appointmentlink'>Make Appointment</Bessemer.Button>
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