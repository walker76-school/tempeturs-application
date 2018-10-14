import React from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {PetInfo} from 'js/info/petInfo';

class PetPage extends React.Component {
    render() {
        let petInfo;
        if (this.props.user && this.props.user['petIds'] && this.props.user['petIds'].length > 0) {
            petInfo = this.props.user['petIds'].map((i, index) => <PetInfo petKey={i}/>);
        } else {
            petInfo = (<h2>Looks like you don't have any pets yet</h2>);
        }

        return (
            <div>
                <div className='addPetWrapper'>
                    {petInfo}
                    <a className='link petLink' onClick={this.handleClick}>Add Pet</a>
                </div>
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