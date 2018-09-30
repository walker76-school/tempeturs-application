import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import * as Pages from 'js/pages';
import {Home} from 'js/home/home';
import {AccountPage} from 'js/account/accountPage';

import Cookies from 'universal-cookie';
import * as Users from 'js/api/usersAPI';
import {RegisterPage} from 'js/registration/registration';
import {LoginPage} from 'js/login/login';
import {About} from 'js/home/about'
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
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/pet" component={Pages.PetPage} />
					<Route exact path="/account" component={AccountPage} />
                    <Route exact path="/about" component={About} />
				</div>
			</HashRouter>
		);
	}
}