import React from 'react';
import CalendarComponent from 'js/account/components/calendarComponent';

export default class CalendarPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <CalendarComponent/>
                </div>
            </div>
        );
    }
}