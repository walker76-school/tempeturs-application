import axios from 'axios';

// export function getSitters(zip, date) {
// 	return axios.get('/api/appointment/findSitters/' + zip);
// }

export function getSitters(addressLine, city, state, zip){
    return axios.get('/api/appointment/findSitters/'+addressLine+'/'+city+'/'+state+'/'+zip);
}
export function getRating(){
	return axios.get('api/appointment/rating');
}

export function makeAppointment(appointment) {
	return axios.post('/api/appointment/makeAppointment/', appointment);
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

export function cancelAppointment(id){
	return axios.post('/api/appointment/cancelAppointment/' + id);
}

export function rateAppointment(id, rating){
	return axios.post('/api/appointment/rateAppointment/' + id + '/' + rating);
}

let Actions = {};

Actions.registerAppointment = (appointment, callback) => {
    return (dispatch) => {
        return makeAppointment(appointment).then((retApp) => {
            if(callback !== null){
                callback(retApp['id']);
            }
            return retApp;
        });
    };
};

export {Actions};