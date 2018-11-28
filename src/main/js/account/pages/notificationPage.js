import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class NotificationPage extends React.Component {

	render() {

		{/* Setup initial content */}
		let component = (<div>You don't have any notifications.</div>);

		{/* If there are available notifications, then map them */}
		if(this.props.user && this.props.user.notifications.length > 0){

			{/* Map each notification to a new notifications view */}
			component = this.props.user.notifications.map((i) =>
				<div>
					<label>{i}</label>
					<br/>
				</div>
			);
		}

		return (
			<div>
				{/* Display the content, either the default label or the list of notifications */}
				{component}
			</div>
		);
	}
}

{/* Connect to the Redux store to have access to the user data */}
NotificationPage = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(NotificationPage);

export { NotificationPage };