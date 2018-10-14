import React from 'react';
import {Account} from 'js/account/account';
import CalendarPage from 'js/account/pages/calendarPage';

export default class CalendarWrapper extends React.Component {

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
                   <CalendarPage/>
               </Account>
            </div>
        );
    }
}