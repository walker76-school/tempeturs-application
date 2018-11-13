import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {Home} from 'js/home/home';
import Cookies from 'universal-cookie';
import * as Users from 'js/api/usersAPI';
import {SitterRegisterPage} from 'js/registration/registerSitter';
import {LoginPage} from 'js/login/login';
import {OwnerRegisterPage} from 'js/registration/registerOwner';
import Dashboard from 'js/account/Dashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#1e90ff',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: will be calculated from palette.secondary.main,
            main: '#FF7F50',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: will be calculated to contrast with palette.secondary.main
        },
        // error: will use the default color
    },
});

class Index extends React.Component {

	constructor(props){
		super(props);
		const cookies = new Cookies();
		if(cookies.get('auth')){
			this.props.store.dispatch(Users.Actions.setAuthentication(cookies.get('auth')));
			this.props.store.dispatch(Users.Actions.refresh());
		}
	}

	//Rendering between pages causes cookie to not reload so keep authentication cookie
    //stay here for navigation of website
	render() {
		return (
		    <MuiThemeProvider theme={theme} >
                <HashRouter>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/registerOwner' component={OwnerRegisterPage} />
                        <Route exact path='/registerSitter' component={SitterRegisterPage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/account' component={Dashboard} />
                    </div>
                </HashRouter>
            </MuiThemeProvider>
		);
	}
}

export default (Index);