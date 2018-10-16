import React from 'react';
import CalendarComponent from 'js/account/components/calendarComponent';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import _ from 'lodash';
import SitterList from 'js/account/components/sitterList';

class NotificationPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: ''
		};
	}

	componentDidMount(){
		let component = (<div>You don't have any notifications.</div>);
		if(this.props.user && this.props.user.notifications.length > 0){
			component = this.props.user.notifications.map((i, index) =>
				<div>
					<label>{this.props.user.notifications[i]}</label>
					<br/>
				</div>
			);
		}
		this.setState({
			notifications: component
		});
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					{this.state.notifications}
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