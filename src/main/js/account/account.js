import React from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {NavComponent} from 'js/account/components/navcomponent';
import {Logout} from 'js/account/logout';
import { Redirect } from 'react-router-dom';

class Account extends React.Component {

	constructor() {
		super();

		{/* This state is used to determine what component is rendered in the wrapper */}
		this.state = {
			component: ''
		};

		{/* Bind the setSubComponent function so it knows about the state */}
		this.setSubComponent = this.setSubComponent.bind(this);

		{/* Bind the renderSubComponent function so it knows about the state */}
		this.renderSubComponent = this.renderSubComponent.bind(this);
	}

	renderSubComponent(){
		{/* Use a default component */}
	    let component = (<div></div>);

		{/* If the component key is a page then redirect to proper page */}
		if (this.state.component === 'Update User'){
		    component = (<Redirect to='/account/updateUser' />);
		} else if (this.state.component === 'Calendar'){
            component = (<Redirect to='/account/calendar' />);
		} else if (this.state.component === 'Availability'){
            component = (<Redirect to='/account/availability' />);
		} else if (this.state.component === 'Pets') {
            component = (<Redirect to='/account/pets'/>);
        }else if (this.state.component === 'Appointment'){
		    component = (<Redirect to='/account/appointment'/>);
		} else if (this.state.component === 'Notifications'){
			component = (<Redirect to='/account/notifications'/>);
		}else if (this.state.component === 'Logout'){
            component = (<Redirect to='/' />);
		}
		return component;
	}

	setSubComponent(variable){
		{/* Set the component key */}
		this.setState({
			component: variable
		});
	}

	renderRedirect(){
		{/* This method will prevent unauthenticated users from accessing the account pages */}
		if(this.props.authentication === null){
			return (<Redirect to='/' />);
		}
	}

	render() {
		return (
			<div>
				{this.renderSubComponent()}
				{this.renderRedirect()}
				<div className='accContainer'>
					<div className='innerAccContainer'>
						{_.isDefined(this.props.user) &&
						<div>
							<label>Name: {this.props.user.name}</label>
							<br/>
							<label>Email: {this.props.user.principal}</label>
							<br/>
							<label>Phone: {this.props.user.phoneNumber}</label>
						</div>
						}
					</div>

                    {/* This is where the child component will be rendered
                      * 'this.props.children' is a special reference to the pages passed within account tags
                      */}
					<div className='innerBodyContainer'>
                        {this.props.children}
					</div>

					<div className='innerNavContainer'>
						{_.isDefined(this.props.user) && this.props.user.type === 'OWNER' &&
							<NavComponent callBack={this.setSubComponent} name='Pets'/>
						}

						{_.isDefined(this.props.user) && this.props.user.type === 'SITTER' &&
							<NavComponent callBack={this.setSubComponent} name='Availability'/>
						}
						<NavComponent callBack={this.setSubComponent} name='Calendar'/>
						<NavComponent callBack={this.setSubComponent} name='Update User'/>
						<NavComponent callBack={this.setSubComponent} name='Appointment'/>
						<NavComponent callBack={this.setSubComponent} name='Notifications'/>

						<Logout callBack={this.setSubComponent} name='Logout'/>
					</div>
				</div>
			</div>

		);
	}
}

Account = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	}),
    dispatch => ({
        refresh: () => dispatch(Users.Actions.refresh())
    })
)(Account);

export { Account };