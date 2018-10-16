import React from 'react';
import CalendarComponent from 'js/account/components/calendarComponent';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import _ from 'lodash';
import SitterList from 'js/account/components/sitterList';

class NotificationPage extends React.Component {

	render() {
		let component = (<div>You don't have any notifications.</div>);
		if(this.props.user && this.props.user.notifications.length > 0){
			component = this.props.user.notifications.map((i, index) =>
				<div>
					<label>{this.props.user.notifications[index]}</label>
					<br/>
				</div>
			);
		}

		return (
			<div className='container'>
				<div className='row'>
					{component}
				</div>
			</div>
		);
	}
}

NotificationPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({

	})
)(NotificationPage);

export { NotificationPage };