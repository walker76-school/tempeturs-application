import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';
import * as Users from 'js/api/usersAPI';
import {PetForm} from 'js/forms/petForm';
import {PetInfo} from 'js/info/petInfo';

class PetPage extends React.Component {

    render() {
        return (
            <div className="container padded">
                <PetForm/>

                { _.isDefined(this.props.user) &&
                <div>Welcome, {this.props.user.principal}!</div>
                }

                { _.isDefined(this.props.authentication) &&
                    <div>
                        {this.props.authentication['access_token']}
                        <PetInfo petKey='123' />
                        <PetInfo petKey='55' />
                        <PetInfo petKey='555' />
                    </div>
                }

            </div>
        );
    }
}

PetPage = connect(
    state => ({
        authentication: Users.State.getAuthentication(state),
        user: Users.State.getUser(state),
    })
)(PetPage);

export { PetPage };