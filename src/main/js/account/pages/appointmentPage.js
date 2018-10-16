import React from 'react';
import AppointmentComponent from 'js/account/components/appointmentComponent';
import SitterList from 'js/account/components/sitterList';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AppointmentPage extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <AppointmentComponent/>
					{_.isDefined(this.props.user) &&
                        <SitterList zip={this.props.user.zip}/>
					}
                </div>
            </div>
        );
    }
}

AppointmentPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({

	})
)(AppointmentPage);

export { AppointmentPage };