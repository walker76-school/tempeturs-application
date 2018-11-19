import React from 'react';

import {withStyles} from '@material-ui/core/styles/index';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

const myEventsList = [
    {
        start: '2018-11-20',
        end: '2018-11-21',
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        start: '2018-11-19',
        end: '2018-11-25',
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];

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
        return (
            <div>
                <BigCalendar
                    localizer={localizer}
                    format={formats}
                    culture='en-GB'
                    events={myEventsList}
                    views={['month', 'week']}/>
            </div>
        );
    }
}


export default (CalendarPage);