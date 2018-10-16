import axios from 'axios';

export function getSitters(zip, date) {
	return axios.get('/api/appointment/findSitters/' + zip);
}