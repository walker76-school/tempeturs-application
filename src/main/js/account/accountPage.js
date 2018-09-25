import React from 'react';
import {PetForm} from 'js/forms/petForm';
import _ from 'lodash';
import {PetInfo} from 'js/info/petInfo';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AccountPage extends React.Component {

	render() {
		return (
			<div className="container padded">
				{ _.isDefined(this.props.user) &&
					<div>
						<label>Name: {this.props.user.name}</label>
						<br/>
						<label>Email: {this.props.user.principal}</label>
						<br/>
						<label>Phone: {this.props.user.phoneNumber}</label>
					</div>
				}

			</div>
		);
	}
}

AccountPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	})
)(AccountPage);

export { AccountPage };