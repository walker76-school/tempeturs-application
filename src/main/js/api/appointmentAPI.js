import axios from 'axios';

export function getSitters(zip, date) {
	return axios.get('/api/appointment/findSitters/' + zip);
}

export function makeAppointment(ownerPrincipal, sitterPrincipal, petId) {
	return axios.get('/api/appointment/makeAppointment/' + ownerPrincipal + '/' + sitterPrincipal + '/' + petId);
}