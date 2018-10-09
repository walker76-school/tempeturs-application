import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import * as Pages from 'js/pages';
import {Home} from 'js/home/home';
import {Account} from 'js/account/account';

import Cookies from 'universal-cookie';
import * as Users from 'js/api/usersAPI';
import {RegisterPage, SitterRegisterPage} from 'js/registration/registerSitter';
import {LoginPage} from 'js/login/login';
import {OwnerRegistrationForm} from 'js/forms/ownerRegistrationForm';
import {OwnerRegisterPage} from 'js/registration/registerOwner';

export default class Index extends React.Component {

	constructor(props){
		super(props);
		const cookies = new Cookies();
		if(cookies.get('auth')){
			this.props.store.dispatch(Users.Actions.setAuthentication(cookies.get('auth')));
		}

		if(cookies.get('user')){
			this.props.store.dispatch(Users.Actions.setUser(cookies.get('user')));
		}
	}

	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/registerOwner" component={OwnerRegisterPage} />
					<Route exact path="/registerSitter" component={SitterRegisterPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/pet" component={Pages.PetPage} />
					<Route exact path="/account" component={Account} />
				</div>
			</HashRouter>
		);
	}
}