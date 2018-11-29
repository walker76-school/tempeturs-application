import React from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {getCalendarEvents} from 'js/api/appointmentAPI';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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
            events: [],
            expandedText: ''
        };
        this.setExpandedText = this.setExpandedText.bind(this);
        this.close = this.close.bind(this);
    }

    componentWillMount() {
		{/* Call getSitters which is located in js/api/appointmentApi */}
		getCalendarEvents(this.props.user.zip)
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}
				    let events = response.map((i) => {
						return {
							end: i['endDate'],
							start: i['startDate'],
							title: 'Appointment with ' + (this.props.user.principal === i['owner'] ? i['sitter'] : i['owner']),
							description: (new Date(i['startDate'])).customFormat( '#DDD# #MMM# #DD#, #YYYY# #hh#:#mm#:#ss# #AMPM#' ) + ' - ' + (new Date(i['endDate'])).customFormat( '#DDD# #MMM# #DD#, #YYYY# #hh#:#mm#:#ss# #AMPM#' ),
							data: i['type'],
						};
                    });

					{/* Set the state to the response value, which is a list of possible sitters */}
					this.setState({
						events: events
					}, () => {
						console.log(this.state);
					});
				}).catch((error) => {
			alert(error);
		});
	}

	setExpandedText = (event) => {
        this.setState({
            expandedText: event.description
        });
    };

    close = () => {
        this.setState({
            expandedText: ''
        });
    };

	render() {

        return (

            <div>
                <Dialog
                    open={this.state.expandedText !== ''}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description' >
                    <DialogTitle id='alert-dialog-title'>Details</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            {this.state.expandedText}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.close} color='primary'>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <BigCalendar
					popup
					localizer={localizer}
					format={formats}
					culture='en-GB'
					events={this.state.events}
					defaultView={BigCalendar.Views.MONTH}
					onSelectEvent={event => this.setExpandedText(event)}
					views={['month']}
					eventPropGetter={
						(event, start, end, isSelected) => {
							let newStyle = {
								backgroundColor: '#1e90ff',
							};

							if (event.data === 'ACCEPTED'){
								newStyle.backgroundColor = '#1e90ff';
							} else if (event.data === 'PENDING'){
								newStyle.backgroundColor = '#FF7F50';
							} else if (event.data === 'REJECTED' || event.data === 'CANCELLED'){
								newStyle.backgroundColor = '#aaaaaa';
							}

							return {
								className: '',
								style: newStyle
							};
						}
					}
				/>
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