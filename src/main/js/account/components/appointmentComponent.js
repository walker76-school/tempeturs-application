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
import { Rating } from 'material-ui-rating';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppointmentPetComponent from 'js/account/components/appointmentPetComponent';

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
			appointment: null,
            startDate: 0,
            endDate: 0,
            type: '',
            owner: '',
            sitter: '',
            petIds: [],
            rating: -1,
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
						appointment: response,
                        startDate: response['startDate'],
                        endDate: response['endDate'],
                        type: response['type'],
                        owner: response['owner'],
                        sitter: response['sitter'],
                        petIds: response['petIds'],
                        rating: response['rating'],
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
			update: !this.state.update,
            expanded: false,
            type: 'APPROVED'
		});
        this.props.refresh();
	};

	onClickReject = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		rejectAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update,
            expanded: false,
            type: 'REJECTED'
		});
        this.props.refresh();
	};

	onClickCancel = () => {
		{/* Call approveAppointment which is located in js/api/appointmentApi */}
		cancelAppointment(this.props.id);

		{/* Update the state to force a refresh */}
		this.setState({
			update: !this.state.update,
            expanded: false,
            type: 'CANCELLED'
		});
        this.props.refresh();
	};

	onRate = (val) => {
		rateAppointment(this.props.id, val);
        this.setState({
            update: !this.state.update,
            expanded: false,
            rating: val
        });
        this.props.refresh();
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};

    render() {
		const { classes } = this.props;
		const { expanded } = this.state;

        let pets = (<div>There are no pets for this appointment</div>);
        if(this.state.petIds != null){
        	pets = this.state.petIds.map((i, index) => <AppointmentPetComponent key={index} petKey={i}/>);
		}

        return (
			<ExpansionPanel expanded={expanded === ('panel' + this.props.index)} onChange={this.handleChange('panel' + this.props.index)}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>{(new Date(this.state.startDate)).customFormat( '#DDD# #MMM# #DD#, #YYYY# #hh#:#mm#:#ss# #AMPM#' )} - {(new Date(this.state.endDate)).customFormat( '#DDD# #MMM# #DD#, #YYYY# #hh#:#mm#:#ss# #AMPM#' )}</Typography>
					<Typography className={classes.secondaryHeading}>Type: {this.state.type}</Typography>
				</ExpansionPanelSummary>
                <Divider />
				<ExpansionPanelDetails>
					<Typography>
						Owner: {this.state.owner}
						<br/>
						Sitter: {this.state.sitter}
						<br/>
					{(this.props.userType === 'OWNER' || this.props.userType === 'COMBO') &&
					this.state.type === 'ACCEPTED' &&
					<div>

                        <MuiThemeProvider>
                        <Rating
                            value={this.state.rating}
                            max={5}
                            onChange={(value) => this.onRate(value)}
                        />
						</MuiThemeProvider>

					</div>
					}

					{
						this.state.type === 'ACCEPTED' &&
						this.state.rating !== -1 &&
						<div>
							<label>Rating: {this.state.rating}</label> <br/>
						</div>
					}
					</Typography>
				</ExpansionPanelDetails>
				<Divider />
                <ExpansionPanelDetails>
                    <Typography>
                        {pets}
                    </Typography>
                </ExpansionPanelDetails>
                <Divider />
				<ExpansionPanelActions>
					{(this.props.userType === 'SITTER' || this.props.userType === 'COMBO') && this.state.type === 'PENDING' &&
					<Bessemer.Button onClick={this.onClickApprove}>Approve</Bessemer.Button>
					}

					{(this.props.userType === 'SITTER' || this.props.userType === 'COMBO') && this.state.type === 'PENDING' &&
					<Bessemer.Button onClick={this.onClickReject}>Reject</Bessemer.Button>
					}

					{(this.state.type === 'ACCEPTED' || (this.state.type === 'PENDING' && (this.props.userType === 'OWNER' || this.props.userType === 'COMBO')))&&
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