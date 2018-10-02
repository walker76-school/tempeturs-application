import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class PetComponent extends React.Component {

	render() {
		return (
			<div >
				<h4>It looks like you don't have any pets yet. Let's go ahead and register one of them.</h4>
			</div>

		);
	}
}

PetComponent = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	})
)(PetComponent);

export { PetComponent };