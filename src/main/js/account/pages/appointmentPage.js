import React from 'react';
import AppointmentComponent from "js/account/components/appointmentComponent";

export default class AppointmentPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <AppointmentComponent/>
                </div>
            </div>
        );
    }
}