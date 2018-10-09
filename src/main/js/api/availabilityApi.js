import axios from 'axios';

export function setAvailability(availability) {
	return axios.post('/api/availability', availability);
}

export function getAvailability(principal) {
	return axios.get('/api/availability/get/' + principal);
}

let Actions = {};

Actions.setAvailability = (availability) => {
	return (dispatch) => {
		return setAvailability(availability).then(() => {
			return availability;
		});
	};
};

export {Actions};