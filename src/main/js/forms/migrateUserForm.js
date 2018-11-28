import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/api/usersAPI';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
});

class MigrateUserForm extends React.Component {

	// Store the values in the state
	constructor(props) {
		super(props);
		this.state = {
			type: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	// Update the user on submit
	onSubmit = () => {
		let updatedUser = this.props.user;

		updatedUser['type'] = this.state['type'];
		return this.props.updateUser(updatedUser);
	};

	render() {
		let { submitting } = this.props;
		const { classes } = this.props;

		return (
			<div>
				<h3>Migrate User Type</h3>
				<p>Warning: This will update your user type, make sure you absolutely want to change this before
					proceeding. If you are changing from a sitter type to a non-sitter type, you are still responsible
					for any pending appointments unless you cancel them. </p>
				<div className={classes.root}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="age-native-simple">Type</InputLabel>
						<Select
							native
							value={this.state.type}
							onChange={this.handleChange('type')}
							inputProps={{
								name: 'type',
								id: 'age-native-simple',
							}}
						>
							<option value="" />
							<option value={'SITTER'}>Sitter</option>
							<option value={'OWNER'}>Owner</option>
							<option value={'COMBO'}>Combo</option>
						</Select>
					</FormControl>
				</div>
				<Bessemer.Button onClick={this.onSubmit} loading={submitting}>Update</Bessemer.Button>

			</div>
		);
	}
}

MigrateUserForm.propTypes = {
	classes: PropTypes.object.isRequired,
};


MigrateUserForm = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		updateUser: user => dispatch(Users.Actions.update(user))
	})
)(MigrateUserForm);

export default withStyles(styles)(MigrateUserForm);
