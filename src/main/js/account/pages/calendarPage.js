import React from 'react';
import CalendarComponent from 'js/account/components/calendarComponent';

export default class CalendarPage extends React.Component {

    render() {
        {/* Right now this page is merely a wrapper for the CalendarComponent to follow convention */}
        return (
            <div className='container'>
                <div className='row'>
                    <CalendarComponent/>
                </div>
            </div>
        );
    }
}