import axios from 'axios';

export function registerPet(pet) {
    return axios.post('/api/pets', pet);
}

export function getPet(id) {
    return axios.get('/api/pets/' + id);
}

let Actions = {};

Actions.registerPet = pet => {
    return (dispatch) => {
        return registerPet(pet).then(() => {
            return pet;
        });
    };
};

export {Actions};