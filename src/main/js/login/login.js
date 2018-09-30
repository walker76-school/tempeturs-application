import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Users from 'js/api/usersAPI';
import {LoginForm} from 'js/forms/loginForm';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = { redirect: false };
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		});
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			return (
				<Redirect to='/account' />
			);
		}
	};

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<div className="regContainer">
					<div className="innerRegContainer">
						<h2>Login</h2>
						<hr />
						<LoginForm callBack={this.setRedirect}/>
					</div>
				</div>
			</div>
		);
	}
}

LoginPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
	})
)(LoginPage);

export { LoginPage };