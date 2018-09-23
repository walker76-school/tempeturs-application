import React from 'react';
import {getPet} from 'js/pet/petAPI';

class PetInfo extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {id: '', name: '', type: ''};
    }

    componentDidMount() {
        getPet(this.props.petKey)
            .then(
                (response) => {
                    this.setState({
                        id: response['id'],
                        name: response['name'],
                        type: response['type']
                    });
                }).catch((error) => {
            alert(error);
        });
    }

    render() {
        return (
            <div>
                <label>Welcome, {this.state.name}! Your id is {this.state.id} and your type is {this.state.type}</label>
            </div>
        );
    }
}

export {PetInfo};