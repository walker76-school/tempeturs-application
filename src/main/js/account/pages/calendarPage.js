import React from 'react';

import {withStyles} from '@material-ui/core/styles/index';

import event from 'js/account/pages/event';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import PropTypes from 'prop-types';
import EventComponent from 'js/account/components/appointmentComponent';

BigCalendar.momentLocalizer(moment);

const myEventsList = [
    {
        end: new Date('November 10, 2018 11:13:00'),
        start: new Date('November 09, 2018 11:13:00'),
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        end: new Date('November 13, 2018 11:13:00'),
        start: new Date('November 09, 2018 11:13:00'),
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
    {
        end: new Date('November 25, 2017 11:13:00'),
        start: new Date('November 20, 2017 11:13:00'),
        title: 'homework',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];

/*
const event2 = this.props.user.appointments.map((i, index) => {

    return(
        <AppointmentComponent key={index} userType={this.props.user.type} id={i} index={index}/>
    );
});
*/

let formats = {
    dateFormat: 'dd',

    dayFormat: (date, culture, localizer) =>
        localizer.format(date, 'DDD', culture),

    dayRangeHeaderFormat: ({ start, end }, culture, local) =>
        local.format(start, { date: 'short' }, culture) + ' — ' +
        local.format(end, { date: 'short' }, culture)
};
//const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const localizer =  BigCalendar.momentLocalizer(moment);

class CalendarPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }




    render() {


        let event2 = this.props.user.appointments.map((i, index) =>
            <EventComponent key={index} userType={this.props.user.type} id={i} index={index}/>
        );

        return (

            <div>
                <BigCalendar
                    localizer={localizer}
                    format={formats}
                    culture='en-GB'
                    events={event2}
                    views={['month', 'week']}/>
            </div>
        );
    }
}



CalendarPage = connect(
    state => ({
        user: Users.State.getUser(state),
    })
)(CalendarPage);


export default (CalendarPage);