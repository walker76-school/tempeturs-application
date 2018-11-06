import React, { Component } from 'react';
import {approveAppointment, getAppointment, rateAppointment, rejectAppointment, cancelAppointment} from 'js/api/appointmentAPI';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Divider from '@material-ui/core/Divider';
import * as Bessemer from 'js/alloy/bessemer/components';

const styles = theme => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});

class AppointmentComponent extends React.Component {

	constructor(props){
		super(props);
		{/* Setup an update state to reload the component on approval */}
		this.state = {
			update: false,
			appointment: '',
			expanded: null,
		};
		{/* Bind the onClick functions so they know about the state */}
		this.onClickApprove = this.onClickApprove.bind(this);
		this.onClickReject = this.onClickReject.bind(this);
		this.onClickCancel = this.onClickCancel.bind(this);
	}

	componentWillMount(){
		{/* Call getSitters which is located in js/api/appointmentApi */}
		getAppointment(this.props.id)
			.then(
				(response) => {
					{/*The .then waits for a response from the API and then executes the following code */}

					{/* Set the state to the response value, which is a list of possible sitters */}
					this.setState({
						appointment: response
					});
				}).catch((error) => {
			{/* If there is any error then alert the user
			  * TODO - Add some proper alert notifications
			  */}
			alert(error);
		});
	}

	onClickApprove = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		approveAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update
		});
	};

	onClickReject = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		rejectAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update
		});
	};

	onClickCancel = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		cancelAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update
		});
	};

	rate1 = () => {
		rateAppointment(this.props.id, 1);
	};

	rate2 = () => {
		rateAppointment(this.props.id, 2);
	};

	rate3 = () => {
		rateAppointment(this.props.id, 3);
	};

	rate4 = () => {
		rateAppointment(this.props.id, 4);
	};

	rate5 = () => {
		rateAppointment(this.props.id, 5);
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};

    render() {
		const { classes } = this.props;
		const { expanded } = this.state;

        return (
			<ExpansionPanel expanded={expanded === ('panel' + this.props.index)} onChange={this.handleChange('panel' + this.props.index)}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Pet: {this.state.appointment.petId}</Typography>
					<Typography className={classes.secondaryHeading}>Type: {this.state.appointment.type}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Owner: {this.state.appointment.owner}
						<br/>
						Sitter: {this.state.appointment.sitter}
						<br/>
					{(this.props.userType === 'OWNER' || this.props.userType === 'COMBO') &&
					this.state.appointment.type === 'ACCEPTED' &&
					this.state.appointment.rating === -1 &&
					<div>
						<button onClick={this.rate1}>1</button>
						<button onClick={this.rate2}>2</button>
						<button onClick={this.rate3}>3</button>
						<button onClick={this.rate4}>4</button>
						<button onClick={this.rate5}>5</button>
					</div>
					}

					{
						this.state.appointment.type === 'ACCEPTED' &&
						this.state.appointment.rating !== -1 &&
						<div>
							<label>Rating: {this.state.appointment.rating}</label> <br/>
						</div>
					}
					</Typography>
				</ExpansionPanelDetails>
				<Divider />
				<ExpansionPanelActions>
					{(this.props.userType === 'SITTER' || this.props.userType === 'COMBO') && this.state.appointment.type === 'PENDING' &&
					<Bessemer.Button onClick={this.onClickApprove}>Approve</Bessemer.Button>
					}

					{(this.props.userType === 'SITTER' || this.props.userType === 'COMBO') && this.state.appointment.type === 'PENDING' &&
					<Bessemer.Button onClick={this.onClickReject}>Reject</Bessemer.Button>
					}

					{this.state.appointment.type === 'ACCEPTED' &&
						<Bessemer.Button onClick={this.onClickCancel}>Cancel Appointment</Bessemer.Button>
					}


				</ExpansionPanelActions>
			</ExpansionPanel>

        );
    }
}

AppointmentComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppointmentComponent);