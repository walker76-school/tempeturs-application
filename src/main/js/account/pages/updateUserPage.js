import React from 'react';
import {UpdateUserForm} from 'js/forms/updateUserForm';
import MigrateUserForm from 'js/forms/migrateUserForm';

export default class UpdateUserPage extends React.Component {
    render() {
        return (
            <div>
                <UpdateUserForm/>
                <MigrateUserForm/>
            </div>
        );
    }
}