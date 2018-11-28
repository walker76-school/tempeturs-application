import React from 'react';
import { Redirect } from 'react-router-dom';
import {SitterRegistrationForm} from 'js/forms/sitterRegistrationForm';

export class SitterRegisterPage extends React.Component {

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

	componentDidMount() {
		document.body.classList.add("background-blue");
	}

	componentWillUnmount() {
		document.body.classList.remove("background-blue");
	}

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<div>
					<div className="innerRegContainer">
						<h2>Register</h2>
						<hr />
						<SitterRegistrationForm callBack={this.setRedirect}/>
					</div>
				</div>
			</div>
		);
	}
}