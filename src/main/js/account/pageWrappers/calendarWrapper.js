import React from 'react';
import {Account} from 'js/account/account';
import CalendarPage from 'js/account/pages/calendarPage';

export default class CalendarWrapper extends React.Component {

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
				{/* Render the Calendar page in the Account wrapper */}
               <Account>
                   <CalendarPage/>
               </Account>
            </div>
        );
    }
}