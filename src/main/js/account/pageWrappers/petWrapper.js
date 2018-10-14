import React from 'react';
import {Account} from 'js/account/account';
import {PetPage} from 'js/account/pages/petPage';

export default class PetWrapper extends React.Component {

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
                    <PetPage/>
                </Account>
            </div>
        );
    }
}