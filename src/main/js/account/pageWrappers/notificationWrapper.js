import React from 'react';
import {Account} from 'js/account/account';
import {NotificationPage} from 'js/account/pages/notificationPage';

export default class NotificationWrapper extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			refresh: false,
		};
	}

	render() {
		return (
			<div>
				<Account>
					<NotificationPage/>
				</Account>
			</div>
		);
	}
}