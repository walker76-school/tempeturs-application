import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { mainListItems, secondaryListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import {AvailabilityPage} from 'js/account/pages/availabilityPage';
import {PetPage} from "js/account/pages/petPage";
import UpdateUserPage from 'js/account/pages/updateUserPage'
import { Redirect } from 'react-router-dom';
import CalendarPage from "js/account/pages/calendarPage";
import {AppointmentPage} from "js/account/pages/appointmentPage";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
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
        width: `calc(100% - ${drawerWidth}px)`,
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
});

class Dashboard extends React.Component {
    constructor() {
        super();

        {/* This state is used to determine what component is rendered in the wrapper */}
        this.state = {
            component: '',
            open: true
        };

        {/* Bind the setSubComponent function so it knows about the state */}
       this.handleButtonClick = this.handleButtonClick.bind(this);

        {/* Bind the renderSubComponent function so it knows about the state */}
        this.renderSubComponent = this.renderSubComponent.bind(this);

    }


    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    setSubComponent(variable){

    }

    handleButtonClick = (event,variable) => {
        {/* Set the component key */}
        this.setState({
            component: variable
        });
    }

    renderSubComponent(){

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
            return (<PetsPage/>);
        }else if(this.state.component === 'Logout'){
            return (<PetsPage/>);
        }else {
            return (<SimpleTable/>);
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
                <CssBaseline />
                {this.renderRedirect()}
                <div className={classes.root}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden,
                                )}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}
                            >
                                Dashboard
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
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
                                <ListItem button >
                                    <ListItemIcon>
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Update User')}>
                                    <ListItemIcon>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Update User" />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Calendar')}>
                                    <ListItemIcon>
                                        <PeopleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Calendar" />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Availability')}>
                                    <ListItemIcon>
                                        <BarChartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Availability" />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Pets')}>
                                    <ListItemIcon>
                                        <LayersIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Pets" />
                                </ListItem>
                                <ListItem button onClick={event => this.handleButtonClick(event,'Appointments')}>
                                    <ListItemIcon>
                                        <LayersIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Appointments" />
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

export default withStyles(styles)(Dashboard);