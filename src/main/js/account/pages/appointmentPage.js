import React from 'react';
import AppointmentComponent from 'js/account/components/appointmentComponent';
import SitterList from 'js/account/components/sitterList';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

class AppointmentPage extends React.Component {

    constructor(props) {
        super(props);
		this.state = {
			appointments: ''
		};
    }

	componentDidMount(){
		let component = (<div>You don't have any appointments.</div>);
		if(this.props.user && this.props.user.appointments.length > 0){
			component = this.props.user.appointments.map((i, index) =>
				<AppointmentComponent owner={i.owner} sitter={i.sitter} petId={i.petId} type={i.type}/>
			);
		}
		this.setState({
			appointments: component
		});
	}
    
    render() {
        return (
            <div className='container'>
                <div className='row'>
					{this.state.appointments}
                </div>
            </div>
        );
    }
}

AppointmentPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({

	})
)(AppointmentPage);

export { AppointmentPage };