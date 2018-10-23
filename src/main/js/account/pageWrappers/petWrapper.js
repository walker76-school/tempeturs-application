import React from 'react';
import {Account} from 'js/account/account';
import {PetPage} from 'js/account/pages/petPage';

export default class PetWrapper extends React.Component {

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
				{/* Render the Pet page in the Account wrapper */}
                <Account>
                    <PetPage/>
                </Account>
            </div>
        );
    }
}