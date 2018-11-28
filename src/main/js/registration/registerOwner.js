import React from 'react';
import { Redirect } from 'react-router-dom';
import {OwnerRegistrationForm} from 'js/forms/ownerRegistrationForm';

export class OwnerRegisterPage extends React.Component {

	//props are what get passed to the components
	//state of componenet get reset every time you access it
	constructor(props) {
		super(props);
		this.state = { redirect: false };
	}

	//sets the redirect state to true
    //every react component with rerender if state is changed
    //only way to refresh react component is to change state
	setRedirect = () => {
		this.setState({
			redirect: true
		});
	};

	//if redirect is true, return redirect tag
	//if page find redirect tag it immediatly redirects you
	//redirect works within hash router
	renderRedirect = () => {
		if (this.state.redirect) {
			return (
				<Redirect to='/login' />
			);
		}
	};

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<div className="regContainer">
					<div className="innerRegContainer">
						<h2>Register</h2>
						<hr />
                        {/*js allows you to pass function as parameter
                        //callback is conventional name
                        //do not do this.setRedirect()*/}
						<OwnerRegistrationForm callBack={this.setRedirect}/>
					</div>
				</div>
			</div>
		);
	}
}