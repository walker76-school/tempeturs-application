import React from 'react';
import {Account} from 'js/account/account';
import UpdateUserPage from 'js/account/pages/updateUserPage';

export default class UpdateUserWrapper extends React.Component {

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
				{/* Render the Update User page in the Account wrapper */}
                <Account>
                    <UpdateUserPage/>
                </Account>
            </div>
        );
    }
}