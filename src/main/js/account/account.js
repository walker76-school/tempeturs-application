import React from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {PetComponent} from 'js/account/petcomponent';
import {NavComponent} from 'js/account/navcomponent';
import {PetForm} from 'js/forms/petForm';
import PetCalendar from 'js/account/calendarcomponent';
import {Logout} from 'js/account/logout';
import { Redirect } from 'react-router-dom';
import {PetInfo} from 'js/info/petInfo';

class Account extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			component: 'Pets',
			pets: []
		};
		this.setSubComponent = this.setSubComponent.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.addPet = this.addPet.bind(this);
	}

	handleClick(){
		this.setSubComponent('Pet Form');
	}

	renderSubComponent(){
		if(this.state.component === 'Pet Form'){
			return (
				<div className="petFormWrapper">
					<PetForm callBack={this.addPet}/>
				</div>
			);
		} else if (this.state.component === 'Calendar'){
			return (<PetCalendar/>);
		} else if (this.state.component === 'Pets'){

			let petInfos = this.state.pets.map((i, index) => <PetInfo petKey={i} />);
			return (
				<div>
					<div className="addPetWrapper">
						{petInfos}
						<a className="link petLink" onClick={this.handleClick}>Add Pet</a>
					</div>
				</div>
			);
		} else if (this.state.component === 'Logout'){
			return (
				<Redirect to='/' />
			);
		}
	}

	setSubComponent(variable){
		this.setState({
			component: variable
		});
	}

	addPet(id){
		console.log('addPet');
		let pets = this.state.pets;
		pets.push(id);
		console.log(pets);
		this.setState({
			pets: pets
		});
	}

	render() {
		return (
			<div>
				<div className="accContainer">
					<div className="innerAccContainer">
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

					<div className="innerBodyContainer">
						{this.renderSubComponent()}
					</div>

					<div className="innerNavContainer">
						<NavComponent callBack={this.setSubComponent} name='Pet Form'/>
						<NavComponent callBack={this.setSubComponent} name='Calendar'/>
						<NavComponent callBack={this.setSubComponent} name='Pets'/>
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
	})
)(Account);

export { Account };