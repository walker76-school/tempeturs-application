import axios from 'axios';

export function getAvailabilityByPrincipal(principal) {
	return axios.get('/api/availability/get/' + principal);
}

export function getAvailability() {
    return axios.get('/api/availability/get');
}