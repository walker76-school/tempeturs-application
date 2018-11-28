import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Users from 'js/api/usersAPI';
import {LoginForm} from 'js/forms/loginForm';
import Cookies from 'universal-cookie';
import {Helmet} from 'react-helmet';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			redirect: false
		};

		const cookies = new Cookies();
		if(cookies.get('auth')){
			this.props.setAuth(cookies.get('auth'));
			this.props.refresh();
			this.setState({
				redirect: true
			});
		}
	}

	componentDidMount() {
		document.body.classList.add('background-blue');
	}

	componentWillUnmount() {
		document.body.classList.remove('background-blue');
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		});
	};

	renderRedirect = () => {

		if (this.state.redirect || (this.props.authentication && this.props.user)) {
			return (
				<Redirect to='/account' />
			);
		}
	};

	render() {
		return (
			<div>
				<Helmet>
					<title>Login</title>
				</Helmet>
				{this.renderRedirect()}
				<div>
					<div className='innerRegContainer'>
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
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		refresh: () => dispatch(Users.Actions.refresh()),
		setAuth: (auth) => dispatch(Users.Actions.setAuthentication(auth))
	})
)(LoginPage);

export { LoginPage };