import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import {Home} from 'js/home/home';
import {Account} from 'js/account/account';

import Cookies from 'universal-cookie';
import * as Users from 'js/api/usersAPI';
import {SitterRegisterPage} from 'js/registration/registerSitter';
import {LoginPage} from 'js/login/login';
import {OwnerRegisterPage} from 'js/registration/registerOwner';
import UpdateUserWrapper from 'js/account/pageWrappers/updateUserWrapper';
import CalendarWrapper from 'js/account/pageWrappers/calendarWrapper';
import AvailabilityWrapper from 'js/account/pageWrappers/availabilityWrapper';
import PetWrapper from 'js/account/pageWrappers/petWrapper';
import SideBar from 'js/account/sideBar';
import AppointmentWrapper from 'js/account/pageWrappers/appointmentWrapper';
import NotificationWrapper from 'js/account/pageWrappers/notificationWrapper';
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
					<Route exact path='/account' component={Account} />
                    <Route exact path='/account/updateUser' component={UpdateUserWrapper} />
                    <Route exact path='/account/calendar' component={CalendarWrapper} />
                    <Route exact path='/account/availability' component={AvailabilityWrapper} />
                    <Route exact path='/account/pets' component={PetWrapper} />
                    <Route exact path='/account/sideBar' component={SideBar} />
					<Route exact path='/account/notifications' component={NotificationWrapper} />
                    <Route exact path='/account/appointment' component={AppointmentWrapper} />
                    <Route exact path='/account/Dashboard' component={Dashboard} />
				</div>
			</HashRouter>
		);
	}
}