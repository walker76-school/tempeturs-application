import _ from 'lodash';

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Users from 'js/api/usersAPI';
import * as Login from 'js/forms/loginForm';
import * as Registration from 'js/forms/registrationForm';
import {PetForm} from 'js/forms/petForm';
import {PetInfo} from 'js/info/petInfo';

export class RegisterPage extends React.Component {
	render() {
		return (
			<div className="container padded">
				<div className="row">
					<div className="col-6 offset-md-3">
						<h2>Register</h2>
						<hr />
						<Registration.RegistrationForm />
					</div>
				</div>
			</div>
		);
	}
}

export class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.state = { redirect: false };
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		});
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			return (<Redirect to='/account' />);
		}
	};

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<div className="container padded">
					<div className="row">
						<div className="col-6 offset-md-3">
							<h2>Login</h2>
							<hr />
							<Login.LoginForm callback={this.setRedirect}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class PetPage extends React.Component {

    render() {
        return (
            <div className="container padded">
                <PetForm/>

                { _.isDefined(this.props.user) &&
                <div>Welcome, {this.props.user.principal}!</div>
                }

                { _.isDefined(this.props.authentication) &&
                    <div>
                        {this.props.authentication['access_token']}
                        <PetInfo petKey='123' />
                        <PetInfo petKey='55' />
                        <PetInfo petKey='555' />
                    </div>
                }

            </div>
        );
    }
}

PetPage = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state),
    })
)(PetPage);

export { PetPage };