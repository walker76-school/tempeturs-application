import React from 'react';
import {Account} from 'js/account/account';
import {NotificationPage} from 'js/account/pages/notificationPage';

export default class NotificationWrapper extends React.Component {

	constructor(props) {
		super(props);

		{/* This state is used for refreshing the account screen */}
		this.state = {
			refresh: false,
		};
	}

	render() {
		return (
			<div>
				{/* Render the Notification page in the Account wrapper */}
				<Account>
					<NotificationPage/>
				</Account>
			</div>
		);
	}
}