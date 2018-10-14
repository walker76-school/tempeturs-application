import React from 'react';
import {Account} from 'js/account/account';
import UpdateUserPage from 'js/account/pages/updateUserPage';

export default class UpdateUserWrapper extends React.Component {

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
                    <UpdateUserPage/>
                </Account>
            </div>
        );
    }
}