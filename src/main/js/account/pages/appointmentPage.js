import React from 'react';
import AppointmentComponent from 'js/account/components/appointmentComponent';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AppointmentPage extends React.Component {
    
    render() {

		{/* Setup initial content */}
		let component = (<div>You don't have any appointments.</div>);

		{/* If there are available sitters, then map them */}
		if(this.props.user && this.props.user.appointments.length > 0){

			{/* Map each appointment to a new appointment component */}
			component = this.props.user.appointments.map((i, index) =>
				<AppointmentComponent userType={this.props.user.type} owner={i.owner} sitter={i.sitter} petId={i.petId} type={i.type}/>
			);
		}

        return (
            <div className='container'>
                <div className='row'>
					{/* Display the content, either the default label or the list of appointments */}
					{component}
                </div>
            </div>
        );
    }
}

{/* Connect to the Redux store to have access to the user data */}
AppointmentPage = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(AppointmentPage);

export { AppointmentPage };