import axios from 'axios';

export function getSitters(zip, date) {
	return axios.get('/api/appointment/findSitters/' + zip);
}

export function makeAppointment(ownerPrincipal, sitterPrincipal, petId) {
	return axios.post('/api/appointment/makeAppointment/' + ownerPrincipal + '/' + sitterPrincipal + '/' + petId);
}

export function getAppointment(id){
	return axios.get('/api/appointment/getAppointment/' + id);
}

export function approveAppointment(id){
	return axios.post('/api/appointment/approveAppointment/' + id);
}

export function rejectAppointment(id){
	return axios.post('/api/appointment/rejectAppointment/' + id);
}