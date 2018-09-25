import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import * as Pages from 'js/pages';
import {Home} from 'js/home/home';
import {AccountPage} from 'js/account/accountPage';
import NavBar from 'js/navigation/navbar';

export default class Index extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/register" component={Pages.RegisterPage} />
					<Route exact path="/login" component={Pages.LoginPage} />
					<Route exact path="/pet" component={Pages.PetPage} />
					<Route exact path="/account" component={AccountPage} />
				</div>
			</HashRouter>
		);
	}
}