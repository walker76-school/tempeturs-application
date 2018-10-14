import React from 'react';
import {AvailabilityComponent} from 'js/account/components/availabilityComponent';
import * as Bessemer from 'js/alloy/bessemer/components';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';

export default class AvailabilityPage extends React.Component {

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
						<AvailabilityComponent day='sunday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='sunday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='sunday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='sunday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Monday</label>
						<hr/>
						<AvailabilityComponent day='monday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='monday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='monday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='monday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Tuesday</label>
						<hr/>
						<AvailabilityComponent day='tuesday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='tuesday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='tuesday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='tuesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Wednesday</label>
						<hr/>
						<AvailabilityComponent day='wednesday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='wednesday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='wednesday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='wednesday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Thursday</label>
						<hr/>
						<AvailabilityComponent day='thursday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='thursday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='thursday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='thursday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Friday</label>
						<hr/>
						<AvailabilityComponent day='friday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='friday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='friday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='friday' name='Evening' callBack={this.onChange}/>
					</div>

					<div className='col-sm'>
						<label>Saturday</label>
						<hr/>
						<AvailabilityComponent day='saturday' name='Morning' callBack={this.onChange}/>
						<AvailabilityComponent day='saturday' name='Midday' callBack={this.onChange}/>
						<AvailabilityComponent day='saturday' name='Afternoon' callBack={this.onChange}/>
						<AvailabilityComponent day='saturday' name='Evening' callBack={this.onChange}/>
					</div>
				</div>
				<Bessemer.Button loading={submitting} onClick={this.onSubmit}>Submit</Bessemer.Button>
			</div>
		);
	}
}

AvailabilityPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({
		setAvailability: (user) => dispatch(Users.Actions.update(user))
	})
)(AvailabilityPage);

export { AvailabilityPage };