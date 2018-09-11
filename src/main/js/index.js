import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import * as Pages from 'js/pages';
import NavBar from 'js/navigation/navbar';

export default class Index extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
                    <NavBar />
					<Route exact path="/" component={Pages.Home} />
					<Route exact path="/register" component={Pages.RegisterPage} />
					<Route exact path="/login" component={Pages.LoginPage} />
					<Route exact path="/page-1" component={Pages.Page1} />
					<Route exact path="/page-2" component={Pages.Page2} />
					<Route exact path="/page-3" component={Pages.Page3} />
				</div>
			</HashRouter>
		);
	}
}