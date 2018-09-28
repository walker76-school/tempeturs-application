import React from 'react';
import { Redirect } from 'react-router-dom';
import {RegistrationForm} from 'js/forms/registrationForm';

export class RegisterPage extends React.Component {

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
				<Redirect to='/login' />
			);
		}
	};

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<div className="regContainer">
					<div className="innerRegContainer">
						<h2>Register</h2>
						<hr />
						<RegistrationForm callBack={this.renderRedirect}/>
					</div>
				</div>
			</div>
		);
	}
}