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
    }

    render() {
        return (
            <div>
				{/* Render the Availability page in the Account wrapper */}
                <Account>
                    <AvailabilityPage/>
                </Account>
            </div>
        );
    }
}