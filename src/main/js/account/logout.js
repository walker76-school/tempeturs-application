import React from 'react';
import {NavComponent} from 'js/account/navcomponent';
import * as Users from 'js/api/usersApi';
import * as ReduxForm from 'redux-form';
import { connect } from 'react-redux';

class Logout extends NavComponent {

	onSubmit = () => {
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

Logout = ReduxForm.reduxForm({form: 'register'})(Logout);

Logout = connect(
	state => ({

	}),
	dispatch => ({
		logout: () => dispatch(Users.Actions.logout())
	})
)(Logout);

export { Logout };