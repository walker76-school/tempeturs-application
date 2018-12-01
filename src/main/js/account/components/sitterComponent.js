import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import * as Bessemer from 'js/alloy/bessemer/components';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Rating} from 'material-ui-rating';

const styles = theme => ({
    card: {
        maxWidth: 400,
        minWidth: 400
    },
    actions: {
        display: 'flex',
    }
});

class SitterComponent extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            content: 'Display',
            refresh: false
        };
		{/* Bind the onClick function so it knows about the state */}
		this.bookSitter = this.bookSitter.bind(this);
	}

	bookSitter = () => {
		{/* Call makeAppointment which is located in js/api/appointmentApi
		  * This uses values passed in the constructor and from the Redux store */}
		this.props.callBack(this.props.sitter.userDto['principal']);
		// once this sitter is booked change the state to booked and show some confirmation
        this.setState({
            content: 'Booked'
        });
	};

    refresh() {
        console.log('Refreshing Sitter...');
        this.setState({
            content: '',
            refresh: !this.state.refresh
        });
    }

	render(){
        const { classes } = this.props;

        {/* Setup initial content */}
        let component;

        if(this.state.content === 'Display'){
			let rating = 'No rating available';
			if(this.props.sitter.rating !== null && this.props.sitter.rating > 0){
				rating = this.props.sitter.rating;
			}

            {/* If the content key is Form then render the PetForm */}
            component = (<Card className={classes.card}>
                        <CardHeader
                            title={this.props.sitter.userDto['name']}
                        />
                        <CardContent>
							<Typography component='p'>
								Rating: {rating}
							</Typography>
                            <Typography component='p'>
                                Email: {this.props.sitter.userDto['principal']}
                            </Typography>
                            <Typography component='p'>
                                Phone Number: {this.props.sitter.userDto['phoneNumber']}
                            </Typography>
							<Typography component='p'>
								Distance: {this.props.sitter.distance}
							</Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <Bessemer.Button onClick={this.bookSitter}>Book Sitter</Bessemer.Button>
                            {/*<Bessemer.Button onClick={this.showDirections}>Directions</Bessemer.Button>*/}
                        </CardActions>
                    </Card>);
        } else if(this.state.content === 'Booked'){
            // this is Booked state.
            // display a booked message.
			{/*<Bessemer.Button onClick={this.showSitter} > Back </Bessemer.Button>*/}
            component =(
				<p> Sitter booked. Redirecting... </p>
            );

        }

        return (
            <div className={classes.root}>
                {/* Display the content, either the default label or the list of appointments */}
                {component}
            </div>
        );
	}
}

    // this is what we need for the map to work material ui also requires another default export
    // how do we do both in jsx
// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyDolgtw08Z4fjTc82xfYQufGBoeWWSXve0')
// })(SitterComponent);


SitterComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};


{/* Connect to the Redux store to have access to the user data */}
SitterComponent = connect(
	state => ({
		user: Users.State.getUser(state),
	})
)(SitterComponent);

export default withStyles(styles)(SitterComponent);