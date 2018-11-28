import React from 'react';
import {getCalendarEvents} from 'js/api/appointmentAPI';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class ReminderList extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            reminders: []
        };
    }

    componentDidMount(){
        {/* Call getSitters which is located in js/api/appointmentApi */}
        getCalendarEvents(this.props.user.zip)
            .then(
                (response) => {
                    {/*The .then waits for a response from the API and then executes the following code */}
                    let reminders = response.map((i, index) => {
                        return {
                            end: i['endDate'],
                            start: i['startDate'],
                            owner: i['owner'],
                            sitter: i['sitter'],
                        };
                    });

                    {/* Set the state to the response value, which is a list of possible sitters */}
                    this.setState({
                        reminders: reminders
                    });
                }).catch((error) => {
            alert(error);
        });
    }

    render() {

        {/* Setup initial content */}
        let content = (<div>There are no reminders available</div>);



        {/* If there are available sitters, then map them */}
        if(this.props.user && this.state.reminders.length > 0){
            let date = new Date().getTime();
            const SECOND = 1000;        // no. of ms in a second
            const MINUTE = SECOND * 60; // no. of ms in a minute
            const HOUR = MINUTE * 60;   // no. of ms in an hour
            const DAY = HOUR * 24;      // no. of ms in a day
            const WEEK = DAY * 7;       // no. of ms in a week

            let tempReminder = this.state.reminders.filter((i) => {
                return (i['start'] - date) > 0;
            });

            if(tempReminder.length > 0) {
                {/* Map each possible sitter to a new sitter component */
                }
                content = this.state.reminders.map((i, index) => {

                    console.log(i['start']);
                    console.log(date);
                    let remaining = i['start'] - date;
                    if (remaining < 0) {
                        return;
                    }

                    console.log('Remaining: ' + remaining);

                    let weeks = (remaining / WEEK);
                    console.log('Weeks: ' + weeks);
                    let days = (remaining % WEEK) / DAY;
                    console.log('days: ' + days);
                    let hours = (remaining % DAY) / HOUR;
                    console.log('hours: ' + hours);
                    let minutes = (remaining % HOUR) / MINUTE;
                    console.log('minutes: ' + minutes);

                    return (
                        <div>
                            You have an appointment
                            with {(this.props.user.principal === i['owner'] ? i['sitter'] : i['owner'])} in {Math.floor(Math.floor(weeks) * 7 + days)} days, {Math.floor(hours)} hours
                            and {Math.floor(minutes)} minutes.
                            <br/>
                        </div>
                    );
                });
            }
        }

        return (
            <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
                {/* Display the content, either the default label or the list of sitters */}
                {content}
            </div>
        );
    }
}

ReminderList = connect(
    state => ({
        user: Users.State.getUser(state),
    })
)(ReminderList);

export default (ReminderList);