import React from 'react';
import {Account} from 'js/account/account';
import AppointmentPage from "js/account/pages/appointmentPage";

export default class AppointmentWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
        };
    }

    render() {
        return (
            <div>
                <Account>
                    <AppointmentPage/>
                </Account>
            </div>
        );
    }
}