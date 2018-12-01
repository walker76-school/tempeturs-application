import React from 'react';
import {AvailabilityComponent} from 'js/account/components/availabilityComponent';
import * as Bessemer from 'js/alloy/bessemer/components';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {getAvailability} from 'js/api/availabilityApi';

class AvailabilityPage extends React.Component {

	constructor() {
		super();

		{/* Bind the onChange function so it knows about the state */}
		this.onChange = this.onChange.bind(this);

		{/* Bind the onSubmit function so it knows about the state */}
		this.onSubmit = this.onSubmit.bind(this);

		{/* Setup a property in the state to hold the list of availabilities */}
		this.state = {
			'sundayMorning': false,
			'sundayMidday': false,
			'sundayAfternoon': false,
			'sundayEvening': false,

			'mondayMorning': false,
			'mondayMidday': false,
			'mondayAfternoon': false,
			'mondayEvening': false,

			'tuesdayMorning': false,
			'tuesdayMidday': false,
			'tuesdayAfternoon': false,
			'tuesdayEvening': false,

			'wednesdayMorning': false,
			'wednesdayMidday': false,
			'wednesdayAfternoon': false,
			'wednesdayEvening': false,

			'thursdayMorning': false,
			'thursdayMidday': false,
			'thursdayAfternoon': false,
			'thursdayEvening': false,

			'fridayMorning': false,
			'fridayMidday': false,
			'fridayAfternoon': false,
			'fridayEvening': false,

			'saturdayMorning': false,
			'saturdayMidday': false,
			'saturdayAfternoon': false,
			'saturdayEvening': false,
            message: ''
		};
	}

	componentWillMount(){
		{/* This calls the getAvailability which is located in js/api/availabilityAPI */}
		getAvailability()
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}

					{/* Set the state to the response value, either true or false */}
					this.setState({
						sundayMorning: response['sundayMorning'],
						sundayMidday: response['sundayMidday'],
						sundayAfternoon: response['sundayAfternoon'],
						sundayEvening: response['sundayEvening'],

						mondayMorning: response['mondayMorning'],
						mondayMidday: response['mondayMidday'],
						mondayAfternoon: response['mondayAfternoon'],
						mondayEvening: response['mondayEvening'],

						tuesdayMorning: response['tuesdayMorning'],
						tuesdayMidday: response['tuesdayMidday'],
						tuesdayAfternoon: response['tuesdayAfternoon'],
						tuesdayEvening: response['tuesdayEvening'],

						wednesdayMorning: response['wednesdayMorning'],
						wednesdayMidday: response['wednesdayMidday'],
						wednesdayAfternoon: response['wednesdayAfternoon'],
						wednesdayEvening: response['wednesdayEvening'],

						thursdayMorning: response['thursdayMorning'],
						thursdayMidday: response['thursdayMidday'],
						thursdayAfternoon: response['thursdayAfternoon'],
						thursdayEvening: response['thursdayEvening'],

						fridayMorning: response['fridayMorning'],
						fridayMidday: response['fridayMidday'],
						fridayAfternoon: response['fridayAfternoon'],
						fridayEvening: response['fridayEvening'],

						saturdayMorning: response['saturdayMorning'],
						saturdayMidday: response['saturdayMidday'],
						saturdayAfternoon: response['saturdayAfternoon'],
						saturdayEvening: response['saturdayEvening'],
					});

				}).catch((error) => {
			{/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
			alert(error);
		});
	}

	onChange = (name, value) => {
		{/* Set the boolean value */}
		this.state[name.toString()] = value;
	};

	updateMessage = () => {
        this.setState({
            message: 'Availability updated.'
        });
    };

	onSubmit = () => {
	    this.setState({
            message: 'Updating availability...'
        });

		{/* Create a copy of the state for use in calling the endpoint */}
		let availability = Object.assign({}, this.state);

		{/* Make a copy of the user and set the availability */}
		let updatedUser = this.props.user;
		updatedUser['availability'] = availability;

		{/* Call the update function to set the availability*/}
		this.props.setAvailability(updatedUser, this.updateMessage);

	};

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md'>
						<label>Sunday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.sundayMorning} day='sunday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.sundayMidday} day='sunday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.sundayAfternoon} day='sunday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.sundayEvening} day='sunday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-md'>
						<label>Monday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.mondayMorning} day='monday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.mondayMidday} day='monday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.mondayAfternoon} day='monday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.mondayEvening} day='monday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-md'>
						<label>Tuesday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.tuesdayMorning} day='tuesday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.tuesdayMidday} day='tuesday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.tuesdayAfternoon} day='tuesday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.tuesdayEvening} day='tuesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-md'>
						<label>Wednesday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.wednesdayMorning} day='wednesday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.wednesdayMidday} day='wednesday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.wednesdayAfternoon} day='wednesday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.wednesdayEvening} day='wednesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-md'>
						<label>Thursday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.thursdayMorning} day='thursday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.thursdayMidday} day='thursday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.thursdayAfternoon} day='thursday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.thursdayEvening} day='thursday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-md'>
						<label>Friday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.fridayMorning} day='friday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.fridayMidday} day='friday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.fridayAfternoon} day='friday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.fridayEvening} day='friday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-md'>
						<label>Saturday</label>
						<hr/>
						<AvailabilityComponent initValue={this.state.saturdayMorning} day='saturday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.saturdayMidday} day='saturday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.saturdayAfternoon} day='saturday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent initValue={this.state.saturdayEvening} day='saturday' name='Evening' callBack={this.onChange}/>
					</div>
				</div>
				<br/>
				<Bessemer.Button onClick={this.onSubmit}>Submit</Bessemer.Button>
                <label>{this.state.message}</label>
			</div>
		);
	}
}

{/* Connect to the Redux store to have access to the user data.
  * Connect to the Redux store to have access to the update function
  */}
AvailabilityPage = connect(
	state => ({
		user: Users.State.getUser(state),
	}),
	dispatch => ({
		setAvailability: (user, callback) => dispatch(Users.Actions.updateCallback(user, callback))
	})
)(AvailabilityPage);

export { AvailabilityPage };