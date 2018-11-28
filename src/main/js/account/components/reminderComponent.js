import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class ReminderComponent extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            curr: Date.now(),

        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ curr: Date.now() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const SECOND = 1000;        // no. of ms in a second
        const MINUTE = SECOND * 60; // no. of ms in a minute
        const HOUR = MINUTE * 60;   // no. of ms in an hour
        const DAY = HOUR * 24;      // no. of ms in a day
        const WEEK = DAY * 7;       // no. of ms in a week

        let remaining = this.props.start - this.state.curr;

        if (remaining < 0) {
            return null;
        }

        let weeks = (remaining / WEEK);
        let days = (remaining % WEEK) / DAY;
        let hours = (remaining % DAY) / HOUR;
        let minutes = (remaining % HOUR) / MINUTE;
        let seconds = (remaining % MINUTE) / SECOND;

        return (
            <div>
                You have an appointment
                with {this.props.user.principal === this.props.owner ? this.props.sitter : this.props.sitter} in {Math.floor(Math.floor(weeks) * 7 + days)} days, {Math.floor(hours)} hours
                and {Math.floor(minutes)} minutes and {Math.floor(seconds)} seconds.
                <br/>
            </div>
        );
    }
}

ReminderComponent = connect(
    state => ({
        user: Users.State.getUser(state),
    })
)(ReminderComponent);

export default (ReminderComponent);