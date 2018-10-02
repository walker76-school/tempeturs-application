import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Users from 'js/api/usersAPI';
import {LoginForm} from 'js/forms/loginForm';
import Cookies from 'universal-cookie';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			redirect: false
		};
		
		const cookies = new Cookies();
		if(cookies.get('user')){
			this.props.setUser(cookies.get('user'));
			this.props.setAuth(cookies.get('auth'));
			this.setState({
				redirect: true
			});
		}

		if(cookies.get('auth')){
			this.props.setAuth(cookies.get('auth'));
		}


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

	}),
	dispatch => ({
		setUser: (user) => dispatch(Users.Actions.setUser(user)),
		setAuth: (auth) => dispatch(Users.Actions.setAuthentication(auth))
	})
)(LoginPage);

export { LoginPage };