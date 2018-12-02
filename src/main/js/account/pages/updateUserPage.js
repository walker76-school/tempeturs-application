import React from 'react';
import {UpdateUserForm} from 'js/forms/updateUserForm';
import MigrateUserForm from 'js/forms/migrateUserForm';

export default class UpdateUserPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <UpdateUserForm callback={this.props.callback}/>
                <MigrateUserForm/>
            </div>
        );
    }
}