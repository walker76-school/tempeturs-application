import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';
import * as Users from 'js/users';
import * as Login from 'js/login';
import {PetForm} from 'js/pet/pet';
import {PetInfo} from 'js/pet/petInfo';

export class Home extends React.Component {
	render() {
		return (
			<div className="container padded">
				This is the home page.
			</div>
		);
	}
}

export class RegisterPage extends React.Component {
	render() {
		return (
			<div className="container padded">
				<div className="row">
					<div className="col-6 offset-md-3">
						<h2>Register</h2>
						<hr />
						<Login.RegistrationForm />
					</div>
				</div>
			</div>
		);
	}
}

export class LoginPage extends React.Component {
	render() {
		return (
			<div className="container padded">
				<div className="row">
					<div className="col-6 offset-md-3">
						<h2>Login</h2>
						<hr />
						<Login.LoginForm />
					</div>
				</div>
			</div>
		);
	}
}

class Page1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    componentDidMount() {
        fetch('/hello/')
            .then(
                (response) => response.text()
            ).then((responseText) => {
            this.setState({
                message: responseText
            });
        }).catch((error) => {
            alert(error);
        });
    }

	render() {
		return (
			<div className="container padded">
                <label>{this.state.message}</label>

				{ _.isDefined(this.props.authentication) &&
				<div>{this.props.authentication['access_token']}</div>
				}

				{ _.isDefined(this.props.user) &&
				<div>Welcome, {this.props.user.principal}!</div>
				}
			</div>
		);
	}
}

Page1 = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	})
)(Page1);

export { Page1 };

export class Page2 extends React.Component {
	render() {
		return (
			<div className="container padded">
				This is page 2.
			</div>
		);
	}
}

export class Page3 extends React.Component {
	render() {
		return (
			<div className="container padded">
				This is page 3.
			</div>
		);
	}
}

class PetPage extends React.Component {

    render() {
        return (
            <div className="container padded">
                <PetForm/>

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