import React from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {getSuggestedSitters} from 'js/api/appointmentAPI';

BigCalendar.momentLocalizer(moment);

let formats = {
    dateFormat: 'dd',

    dayFormat: (date, culture, localizer) =>
        localizer.format(date, 'DDD', culture),

    dayRangeHeaderFormat: ({ start, end }, culture, local) =>
        local.format(start, { date: 'short' }, culture) + ' — ' +
        local.format(end, { date: 'short' }, culture)
};

const localizer =  BigCalendar.momentLocalizer(moment);

class CalendarPage extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentWillMount() {
		{/* Call getSitters which is located in js/api/appointmentApi */}
		getSuggestedSitters(this.props.user.zip)
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}
					console.log(response);

					{/* Set the state to the response value, which is a list of possible sitters */}
					this.setState({
						events: response
					});
				}).catch((error) => {
			{/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
			alert(error);
		});
	}

	render() {
        return (

            <div>
                <BigCalendar
                    localizer={localizer}
                    format={formats}
                    culture='en-GB'
                    events={this.state.events}
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