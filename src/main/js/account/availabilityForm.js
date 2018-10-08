import React from 'react';
import {Availability} from 'js/account/availability';
import * as Bessemer from 'js/alloy/bessemer/components';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import * as AvailabilityApi from 'js/api/availabilityApi';

class AvailabilityForm extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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
		};
	}

	onChange = (name, value) => {
		this.state[name.toString()] = value;
	};

	onSubmit = () => {
		let availability = Object.assign({}, this.state);
		availability['principal'] = this.props.user.principal;
		this.props.setAvailability(availability);
	};

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm'>
						<label>Sunday</label>
						<hr/>
						<Availability initValue={this.state.sundayMorning} day='sunday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.sundayMidday} day='sunday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.sundayAfternoon} day='sunday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.sundayEvening} day='sunday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Monday</label>
						<hr/>
						<Availability initValue={this.state.mondayMorning} day='monday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.mondayMidday} day='monday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.mondayAfternoon} day='monday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.mondayEvening} day='monday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Tuesday</label>
						<hr/>
						<Availability initValue={this.state.tuesdayMorning} day='tuesday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.tuesdayMidday} day='tuesday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.tuesdayAfternoon} day='tuesday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.tuesdayEvening} day='tuesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Wednesday</label>
						<hr/>
						<Availability initValue={this.state.wednesdayMorning} day='wednesday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.wednesdayMidday} day='wednesday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.wednesdayAfternoon} day='wednesday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.wednesdayEvening} day='wednesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Thursday</label>
						<hr/>
						<Availability initValue={this.state.thursdayMorning} day='thursday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.thursdayMidday} day='thursday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.thursdayAfternoon} day='thursday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.thursdayEvening} day='thursday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Friday</label>
						<hr/>
						<Availability initValue={this.state.fridayMorning} day='friday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.fridayMidday} day='friday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.fridayAfternoon} day='friday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.fridayEvening} day='friday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Saturday</label>
						<hr/>
						<Availability initValue={this.state.saturdayMorning} day='saturday' name='Morning' callBack={this.onChange}/>
						<Availability initValue={this.state.saturdayMidday} day='saturday' name='Midday' callBack={this.onChange}/>
						<Availability initValue={this.state.saturdayAfternoon} day='saturday' name='Afternoon' callBack={this.onChange}/>
						<Availability initValue={this.state.saturdayEvening} day='saturday' name='Evening' callBack={this.onChange}/>
					</div>
				</div>
				<Bessemer.Button onClick={this.onSubmit}>Submit</Bessemer.Button>
			</div>
		);
	}
}

AvailabilityForm = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({
		setAvailability: (availability) => dispatch(AvailabilityApi.Actions.setAvailability(availability))
	})
)(AvailabilityForm);

export { AvailabilityForm };