import axios from 'axios';

export function getSitters(zip, date) {
	return axios.get('/api/appointment/findSitters/' + zip);
}

export function makeAppointment(ownerPrincipal, sitterPrincipal, petId) {
	return axios.post('/api/appointment/makeAppointment/' + ownerPrincipal + '/' + sitterPrincipal + '/' + petId);
}

export function approveAppointment(ownerPrincipal, sitterPrincipal, petId){
	return axios.post('/api/appointment/approveAppointment/' + ownerPrincipal + '/' + sitterPrincipal + '/' + petId);
}