import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {Home} from 'js/home/home';
import Cookies from 'universal-cookie';
import * as Users from 'js/api/usersAPI';
import {SitterRegisterPage} from 'js/registration/registerSitter';
import {LoginPage} from 'js/login/login';
import {OwnerRegisterPage} from 'js/registration/registerOwner';
import Dashboard from 'js/account/Dashboard';

export default class Index extends React.Component {

	constructor(props){
		super(props);
		const cookies = new Cookies();
		if(cookies.get('auth')){
			this.props.store.dispatch(Users.Actions.setAuthentication(cookies.get('auth')));
			this.props.store.dispatch(Users.Actions.refresh());
		}
	}

	//Rendering between pages causes cookie to not reload so keep authentication cookie
    //stay here for navigation of website
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path='/' component={Home} />
					<Route exact path='/registerOwner' component={OwnerRegisterPage} />
					<Route exact path='/registerSitter' component={SitterRegisterPage} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/account' component={Dashboard} />
				</div>
			</HashRouter>
		);
	}
}