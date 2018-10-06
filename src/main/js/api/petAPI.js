import axios from 'axios';

export function registerPet(pet) {
    return axios.post('/api/pets', pet);
}

export function updatePet(pet) {
	return axios.post('/api/pets/update', pet);
}

export function getPet(id) {
    return axios.get('/api/pets/' + id);
}

let Actions = {};

Actions.registerPet = (pet, callback) => {
    return (dispatch) => {
        return registerPet(pet).then((retPet) => {
        	if(callback !== null){
        		callback(retPet['id']);
			}
            return retPet;
        });
    };
};

Actions.updatePet = pet => {
	return (dispatch) => {
		return updatePet(pet).then((retPet) => {
			return retPet;
		});
	};
};

export {Actions};