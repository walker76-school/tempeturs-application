import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/PermIdentityTwoTone';
import Pets from '@material-ui/icons/PetsTwoTone';
import Reply from '@material-ui/icons/ReplayTwoTone';
import Supervisor_account from '@material-ui/icons/SupervisorAccountTwoTone';
import CalendarIcon from '@material-ui/icons/CalendarTodayTwoTone';
import Watch_LaterIcon from '@material-ui/icons/WatchLaterTwoTone';
import NotificationImport from '@material-ui/icons/NotificationImportantTwoTone';
import {AvailabilityPage} from 'js/account/pages/availabilityPage';
import {PetPage} from 'js/account/pages/petPage';
import UpdateUserPage from 'js/account/pages/updateUserPage';
import { Redirect } from 'react-router-dom';
import CalendarPage from 'js/account/pages/calendarPage';
import AppointmentPage from 'js/account/pages/appointmentPage';
import {NotificationPage} from 'js/account/pages/notificationPage';
import {Logout} from 'js/account/components/logout';
import * as Users from 'js/api/usersAPI';
import connect from 'react-redux/es/connect/connect';
import {getRating} from 'js/api/appointmentAPI';
import SitterList from 'js/account/components/sitterList';
import DatePicker from 'material-ui/DatePicker/Calendar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SuggestedSitterList from 'js/account/components/suggestedSitterList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as Bessemer from "js/alloy/bessemer/components";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
		flexGrow: 1,
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: '100%',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        {/* This state is used to determine what component is rendered in the wrapper */}
        this.state = {
            component: 'Dashboard',
            open: true,
            rating: -1
        };

        {/* Bind the setSubComponent function so it knows about the state */}
       this.handleButtonClick = this.handleButtonClick.bind(this);

        {/* Bind the renderSubComponent function so it knows about the state */}
        this.renderSubComponent = this.renderSubComponent.bind(this);

    }

    componentWillMount(){
		getRating()
			.then(
                (response) => {
                    {/*The .then waits for a response from the API and then executes the following code */}

                    {/* Set the state to the response value, which is a list of possible sitters */}
                    this.setState({
                        rating: response
                    });
                });
    }

    handleButtonClick = (event,variable) => {
        {/* Set the component key */}
        this.setState({
            component: variable
        });
    };

    renderSubComponent(props){

        if(this.state.component === 'Update User'){
            return (<UpdateUserPage/>);
        }else if(this.state.component === 'Calendar'){
            return (<CalendarPage/>);
        }else if(this.state.component === 'Availability'){
            return (<AvailabilityPage/>);
        }else if(this.state.component === 'Pets'){
                return (<PetPage/>);
        }else if(this.state.component === 'Appointments'){
            return (<AppointmentPage/>);
        }else if(this.state.component === 'Notifications'){
            return (<NotificationPage/>);
        }else if(this.state.component === 'Logout'){
            this.props.logout();
            return (<Redirect to='/' />);
        }else if(this.state.component === 'Dashboard' && this.props.user){
        	let component = (<div>No rating available</div>);
        	if(this.state.rating !== null && this.state.rating > 0){
        		component = (<div>Rating: {this.state.rating}</div>);
			}
            return(
			<Grid container spacing={16}>
				<Grid item md={6}>
					<label>Name: {this.props.user.name}</label>
					<br/>
					<label>Email: {this.props.user.principal}</label>
					<br/>
					<label>Phone: {this.props.user.phoneNumber}</label>
					<br/>
					<label>User Type: {this.props.user.type} </label>
					<br/>
					{component}
					<br/>
				</Grid>
                {(this.props.user.type === 'OWNER' || this.props.user.type === 'COMBO') && <Grid item md={6}>
					<h5>Suggested Sitters:</h5>
					<SuggestedSitterList zip={this.props.user.zip} />
				</Grid>}
			</Grid>
            );
        }
    }

    renderRedirect() {
        {/* This method will prevent unauthenticated users from accessing the account pages */
        }
        if (this.props.authentication === null) {
            return (<Redirect to='/'/>);
        }
    }


    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                {this.renderRedirect()}
                <div className={classes.root}>
                    <AppBar
                        position='absolute'
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)} >

                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color='inherit'
                                aria-label='Open drawer'
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden,
                                )}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component='h1'
                                variant='h6'
                                color='inherit'
                                noWrap
                                className={classes.title}
                            >
                                {this.state.component}
                            </Typography>
                            <IconButton color='inherit'>
                                <Badge badgeContent={this.props.user !== null && this.props.user.notifications !== null ? this.props.user.notifications.length : 0}
                                       color='secondary'
                                       onClick={event => this.handleButtonClick(event,'Notifications')}>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant='permanent'
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <div>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Dashboard')} >
                                    <ListItemIcon>
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Dashboard' />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Update User')}>
                                    <ListItemIcon>
                                        <PeopleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Update User' />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Calendar')}>
                                    <ListItemIcon>
                                        <CalendarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Calendar' />
                                </ListItem>
                                {this.props.user !== null && (this.props.user.type === 'SITTER' || this.props.user.type === 'COMBO')&&
                                <ListItem button onClick={event => this.handleButtonClick(event, 'Availability')}>
                                    <ListItemIcon>
                                        <Watch_LaterIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Availability'/>
                                </ListItem>
                                }
                                {this.props.user !== null && (this.props.user.type === 'OWNER' || this.props.user.type === 'COMBO') &&
                                <ListItem button onClick={event => this.handleButtonClick(event, 'Pets')}>
                                    <ListItemIcon>
                                        <Pets/>
                                    </ListItemIcon>
                                    <ListItemText primary='Pets'/>
                                </ListItem>
                                }
                                <ListItem button onClick={event => this.handleButtonClick(event,'Appointments')}>
                                    <ListItemIcon>
                                        <Supervisor_account/>
                                    </ListItemIcon>
                                    <ListItemText primary='Appointments' />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Notifications')}>
                                    <ListItemIcon>
                                        <NotificationImport/>
                                    </ListItemIcon>
                                    <ListItemText primary='Notifications' />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Logout')}>
                                    <ListItemIcon>
                                        <Reply/>
                                    </ListItemIcon>
                                    <ListItemText primary='Logout' />
                                </ListItem>
                            </div>
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer}/>
                        <div>
                            {this.renderSubComponent()}
                        </div>
                    </main>
                </div>
			</React.Fragment>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

Dashboard = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state),
    }),
    dispatch => ({
        refresh: () => dispatch(Users.Actions.refresh()),
		logout: () => dispatch(Users.Actions.logout())
	})
)(Dashboard);


export default withStyles(styles)(Dashboard);