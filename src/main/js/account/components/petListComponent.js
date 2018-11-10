import React from 'react';
import Toggle from 'react-toggle';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {getPet} from 'js/api/petAPI';

class PetListComponent extends React.Component {

    constructor(props) {
        super(props);
        {/* Initialize the checkbox to be false, this makes our component managed*/}
        this.state = {
            checkedVal: false,
            id: '',
            name: '',
            type: ''
        };

        {/* Bind the onClick function so it knows about the state */}
        this.onClick = this.onClick.bind(this);
    }

    componentWillMount(){
        getPet(this.props.id)
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

    onClick(){
        {/* Store the value of the inverse value to update the component */}
        let alternate = !this.state.checkedVal;

        {/* Swap the value in the state to force a re-render and show the updates */}
        this.setState({
            checkedVal: alternate
        });

        {/* Call the callBack function to update the parent state in availabilityPage */}
        alternate ? this.props.enqueue(this.state.id) : this.props.dequeue(this.state.id);
    }

    render() {
        return (
            <div>
                {/* This is just a label with the name, e.x. "Evening" */}
                <label style={{width: 100}}>{this.state.name}:</label>
                {/* This is a toggle component from the npm package react-toggle.
				  * This is used to render a toggle button.
				  * We also need to use the toggle.css for this component
				  * TODO - Clean up the toggle.css and remove anything unnecessary
				  */}
                <Toggle
                    checked={this.state.checkedVal}
                    onChange={this.onClick} />
            </div>
        );
    }
}

{/* Connect to the Redux store to have access to the user data */}
PetListComponent = connect(
    state => ({
        user: Users.State.getUser(state),
    })
)(PetListComponent);

{/* Export the component */}
export { PetListComponent };