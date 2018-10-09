import axios from 'axios';
import Cookies from 'universal-cookie';

export function registerSitter(user) {
	return axios.post('/api/user/registerSitter', user);
}

export function registerOwner(user) {
	return axios.post('/api/user/registerOwner', user);
}

export function update(user) {
	return axios.post('/api/user/update', user);
}


export function authenticate(username, password) {
	return axios(
		{
			method: 'post',
			url: '/oauth/token',
			params: {
				'grant_type': 'password',
				username,
				password
			},
			auth: {
				username: 'petfinder-app',
				password: 'petfinder-app-secret'
			}
		}
	);
}

export function getUserDetails() {
	return axios.get('/api/user');
}

let State = {};

State.getAuthentication = state => {
	return state.authentication;
};

State.getUser = state => {
	return state.user;
};

export { State };

let Actions = {};

Actions.Types = {
	SET_AUTHENTICATION: 'SET_AUTHENTICATION',
	SET_USER: 'SET_USER'
};

Actions.registerSitter = (user, callback) => {
	return (dispatch) => {
		return registerSitter(user).then(() => {
			return dispatch(Actions.authenticate(user.principal, user.password, callback));
		});
	};
};

Actions.registerOwner = (user, callback) => {
	return (dispatch) => {
		return registerOwner(user).then(() => {
			return dispatch(Actions.authenticate(user.principal, user.password, callback));
		});
	};
};


Actions.update = (user) => {
	return (dispatch) => {
		return update(user).then(() => {
			return dispatch(Actions.setUser(user));
		});
	};
};

Actions.authenticate = (username, password, callback) => {
	return (dispatch) => {
		return authenticate(username, password).then(
			authentication => {
				dispatch(Actions.setAuthentication(authentication));
				if(callback !== null){
					callback();
				}
				return getUserDetails().then(user => {
					dispatch(Actions.setUser(user));
				});
			}
		);
	};
};

Actions.logout = () => {
	const cookies = new Cookies();
	cookies.remove('auth');
	cookies.remove('user');

	return (dispatch) => {
		dispatch(Actions.setAuthentication(null));
		dispatch(Actions.setUser(null));
	};
};

Actions.setAuthentication = authentication => {
	const cookies = new Cookies();
	cookies.set('auth', authentication);

	return {type: Actions.Types.SET_AUTHENTICATION, authentication};
};

Actions.setUser = user => {
	const cookies = new Cookies();
	cookies.set('user', user);

	return {type: Actions.Types.SET_USER, user};
};

export { Actions };

let Reducers = {};

Reducers.authentication = (authentication = null, action) => {
	switch (action.type) {
		case Actions.Types.SET_AUTHENTICATION: {
			return action.authentication;
		}
		default: {
			return authentication;
		}
	}
};

Reducers.user = (user = null, action) => {
	switch (action.type) {
		case Actions.Types.SET_USER: {
			return action.user;
		}
		default: {
			return user;
		}
	}
};

export { Reducers };