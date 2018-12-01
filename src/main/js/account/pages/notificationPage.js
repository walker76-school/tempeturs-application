import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import * as Bessemer from 'js/alloy/bessemer/components';

class NotificationPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentWillMount(){
        this.setState({
            notifications: this.props.user ? this.props.user.notifications : []
        });
    }

    clearNotification = () => {
        let updatedUser = this.props.user;
        updatedUser['notifications'] = [];
        this.props.update(updatedUser);
        this.setState({
            notifications: []
        });
    };

	render() {

		{/* Setup initial content */}
		let component = (<div>You don't have any notifications.</div>);

		{/* If there are available notifications, then map them */}
		if(this.state.notifications.length > 0){

			{/* Map each notification to a new notifications view */}
			component = this.props.user.notifications.map((i) =>
				<div>
					<label>{i}</label>
					<br/>
				</div>
			);
		}

		return (
			<div>
				{/* Display the content, either the default label or the list of notifications */}
				{component}
                <Bessemer.Button className='link appointmentlink' onClick={this.clearNotification}>Clear Notifications</Bessemer.Button>

            </div>
		);
	}
}

{/* Connect to the Redux store to have access to the user data */}
NotificationPage = connect(
	state => ({
		user: Users.State.getUser(state),
	}),
    dispatch => ({
        update: user => dispatch(Users.Actions.update(user))
    })
)(NotificationPage);

export { NotificationPage };