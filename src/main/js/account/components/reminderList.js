import React from 'react';
import {getCalendarEvents} from 'js/api/appointmentAPI';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import ReminderComponent from 'js/account/components/reminderComponent';

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

            let tempReminder = this.state.reminders.filter((i) => {
                return (i['start'] - date) > 0;
            }).sort((a,b) =>{
                return (a['start'] - date) - (b['start'] - date);
            });

            console.log(tempReminder);

            if(tempReminder.length > 0) {
                {/* Map each possible sitter to a new sitter component */
                }
                content = tempReminder.map((i, index) => <ReminderComponent key={index} start={i['start']} owner={i['owner']} sitter={i['sitter']}/>);
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