import React from 'react';
import {makeAppointment} from 'js/api/appointmentAPI';
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

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    }
});

class SitterComponent extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            content: 'Display'
            // refresh: false
        };
		{/* Bind the onClick function so it knows about the state */}
		this.bookSitter = this.bookSitter.bind(this);
		this.showDirections = this.showDirections.bind(this);
		this.showMap = this.showMap.bind(this);
	}

	bookSitter = () => {
		{/* Call makeAppointment which is located in js/api/appointmentApi
		  * This uses values passed in the constructor and from the Redux store
		makeAppointment(this.props.user.principal, this.props.sitter['principal'], this.props.id);
		console.log('refreshing');
		this.props.refresh();*/}
		this.props.callBack(this.props.sitter['principal']);
		// once this sitter is booked change the state to booked and show some confirmation
        this.setState({
            content: 'Booked'
        });
	};
    showSitter = ()=>{
        this.setState({
            content: 'Display'
        });
    };
	showDirections = ()=>{
        this.setState({
            content: 'Directions'
        });
    };
	showMap = ()=>{
        this.setState({
            content: 'Map'
        });
    };
    refresh() {
        console.log('Refreshing Sitter...');
        this.setState({
            content: '',
            refresh: !this.state.refresh
        });
    };

	render(){
        const { classes } = this.props;

        {/* Setup initial content */}
        let component;
        // finish setting up the different elelmets of a component.
        if(this.state.content === 'Display'){
            {/* If the content key is Form then render the PetForm */}
            component = (<Card className={classes.card}>
                        <CardHeader
                            title={this.props.sitter['name']}
                        />
                        <CardContent>
                            <Typography component='p'>
                                Email: {this.props.sitter['principal']}
                            </Typography>
                            <Typography component='p'>
                                Phone Number: {this.props.sitter['phoneNumber']}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <Bessemer.Button onClick={this.bookSitter}>Book Sitter</Bessemer.Button>
                            <Bessemer.Button onClick={this.showDirections}>Directions</Bessemer.Button>
                        </CardActions>
                    </Card>);
        }
        else if( this.state.content === 'Directions'){
            // let component be the directions // make your calls to get appropriate information and then make calls to google api
            component =(
                <body>
                    <h1> this is the directions</h1>
                    <Bessemer.Button onClick={this.showMap} > Map </Bessemer.Button>
                    <Bessemer.Button onClick={this.showSitter}> Back </Bessemer.Button>
                </body>
        );
        }else if(this.state.content === 'Map'){
            // component =(
            // <html>
            // <head>
            //     <style>
            //         /* Set the size of the div element that contains the map */
            //         #map { height}: 400px;  /* The height is 400 pixels */
            //         width: 100%;  /* The width is the width of the web page */
            //         }
            //     </style>
            // </head>
            // <body>
            // <h3>My Google Maps Demo</h3>
            // <div id="map"></div>
            // <script>{
            //     // Initialize and add the map
            //     function initMap() {
            //         // The location of Uluru
            //         var uluru = {lat: -25.344, lng: 131.036};
            //         // The map, centered at Uluru
            //         var map = new google.maps.Map(
            //             document.getElementById('map'), {zoom: 4, center: uluru});
            //         // The marker, positioned at Uluru
            //         var marker = new google.maps.Marker({position: uluru, map: map});
            //     }
            // }
            // </script>
            // <script async defer
            //         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDolgtw08Z4fjTc82xfYQufGBoeWWSXve0&callback=initMap">
            // </script>
            // </body>
            // </html>
            // );
            component =(
                <body>
                <h1>This is the map</h1>
                <Bessemer.Button onClick={this.showDirections} > Back </Bessemer.Button>
                </body>

            );
        }else if(this.state.content === 'Booked'){
            // this is Booked state.
            // display a booked message.
            component =(<body>
            <h1> Sitter booked awaiting approval </h1>
            <Bessemer.Button onClick={this.showSitter} > Back </Bessemer.Button>
            </body>
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