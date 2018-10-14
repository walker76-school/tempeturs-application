import React from 'react';
import {Availability} from 'js/account/availability';
import * as Bessemer from 'js/alloy/bessemer/components';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

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
		let updatedUser = this.props.user;
		updatedUser['availability'] = availability;
		this.props.setAvailability(updatedUser);
	};

	render() {

        let { handleSubmit, submitting } = this.props;

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm'>
						<label>Sunday</label>
						<hr/>
						<Availability day='sunday' name='Morning' callBack={this.onChange}/>
						<Availability day='sunday' name='Midday' callBack={this.onChange}/>
						<Availability day='sunday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='sunday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Monday</label>
						<hr/>
						<Availability day='monday' name='Morning' callBack={this.onChange}/>
						<Availability day='monday' name='Midday' callBack={this.onChange}/>
						<Availability day='monday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='monday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Tuesday</label>
						<hr/>
						<Availability day='tuesday' name='Morning' callBack={this.onChange}/>
						<Availability day='tuesday' name='Midday' callBack={this.onChange}/>
						<Availability day='tuesday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='tuesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Wednesday</label>
						<hr/>
						<Availability day='wednesday' name='Morning' callBack={this.onChange}/>
						<Availability day='wednesday' name='Midday' callBack={this.onChange}/>
						<Availability day='wednesday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='wednesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Thursday</label>
						<hr/>
						<Availability day='thursday' name='Morning' callBack={this.onChange}/>
						<Availability day='thursday' name='Midday' callBack={this.onChange}/>
						<Availability day='thursday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='thursday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Friday</label>
						<hr/>
						<Availability day='friday' name='Morning' callBack={this.onChange}/>
						<Availability day='friday' name='Midday' callBack={this.onChange}/>
						<Availability day='friday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='friday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Saturday</label>
						<hr/>
						<Availability day='saturday' name='Morning' callBack={this.onChange}/>
						<Availability day='saturday' name='Midday' callBack={this.onChange}/>
						<Availability day='saturday' name='Afternoon' callBack={this.onChange}/>
						<Availability day='saturday' name='Evening' callBack={this.onChange}/>
					</div>
				</div>
				<Bessemer.Button loading={submitting} onClick={this.onSubmit}>Submit</Bessemer.Button>
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
		setAvailability: (user) => dispatch(Users.Actions.update(user))
	})
)(AvailabilityForm);

export { AvailabilityForm };