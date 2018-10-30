import React from 'react';
import {Account} from 'js/account/account';
import {AvailabilityPage} from 'js/account/pages/availabilityPage';

export default class AvailabilityWrapper extends React.Component {

    constructor(props) {
        super(props);

		{/* This state is used for refreshing the account screen */}
        this.state = {
            refresh: false,
        };

		{/* Bind the toggleRefresh function so it knows about the state */}
		this.toggleRefresh = this.toggleRefresh.bind(this);
    }

    toggleRefresh(){
    	console.log('refreshing');
        {/* Define a variable that's the opposite of the current boolean */}
        let inverted = !this.state.refresh;

        {/* Set the state to force a refresh */}
        this.setState({
           refresh: inverted
        });
    }

    render() {
        return (
            <div>
				{/* Render the Availability page in the Account wrapper */}
                <Account>
                    <AvailabilityPage refresh={this.toggleRefresh}/>
                </Account>
            </div>
        );
    }
}