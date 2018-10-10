import React from 'react';
import { Redirect } from 'react-router-dom';
import {SitterRegistrationForm} from 'js/forms/sitterRegistrationForm';
import {OwnerRegistrationForm} from 'js/forms/ownerRegistrationForm';

export class OwnerRegisterPage extends React.Component {

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
						<OwnerRegistrationForm callBack={this.setRedirect}/>
					</div>
				</div>
			</div>
		);
	}
}