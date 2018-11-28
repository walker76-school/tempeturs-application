import React from 'react';
import {getPet} from 'js/api/petAPI';

export default class AppointmentPetComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: '', name: '', type: '', expanded: false};
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
                {this.state.name}
            </div>
        );
    }
}