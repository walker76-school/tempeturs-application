import React from 'react';
import {NavComponent} from 'js/account/components/navcomponent';
import * as Users from 'js/api/usersAPI';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';
import {PetPage} from 'js/account/pages/petPage';

class Logout extends NavComponent {

	onSubmit = () => {
		{/* Special onSubmit to not only redirect the account page but also to logout */}
		this.props.callBack(this.props.name);
		return this.props.logout();
	};


	render() {
		return (
			<div className="navComponent" onClick={this.onSubmit}>
				<p>{this.props.name}</p>
			</div>
		);
	}
}

{/* Connect to the Redux store to have access to the logout function */}
Logout = connect(
	dispatch => ({
		logout: () => dispatch(Users.Actions.logout())
	})
)(Logout);

export { Logout };