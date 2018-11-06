import React from 'react';
import {Account} from 'js/account/account';
import AppointmentPage from 'js/account/pages/appointmentPage';

export default class AppointmentWrapper extends React.Component {

    constructor(props) {
        super(props);

        {/* This state is used for refreshing the account screen */}
        this.state = {
            refresh: false,
        };
    }

    render() {
        return (
            <div>
				{/* Render the Appointment page in the Account wrapper */}
                <Account>
                    <AppointmentPage/>
                </Account>
            </div>
        );
    }
}