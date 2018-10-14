import React from 'react';
import {Account} from 'js/account/account';
import {AvailabilityPage} from 'js/account/pages/availabilityPage';

export default class AvailabilityWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
        };
    }

    render() {
        return (
            <div>
                <Account>
                    <AvailabilityPage/>
                </Account>
            </div>
        );
    }
}