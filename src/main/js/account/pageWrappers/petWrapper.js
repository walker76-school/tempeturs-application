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

		{/* Bind the toggleRefresh function so it knows about the state */}
		this.toggleRefresh = this.toggleRefresh.bind(this);
    }

	toggleRefresh(){
		{/* Define a variable that's the opposite of the current boolean */}
		let inverted = !this.state.refresh;

		{/* Set the state to force a refresh */}
		this.setState({
			refresh: inverted
		});
	}

    render() {

    	console.log('render');
        return (
            <div>
				{/* Render the Pet page in the Account wrapper */}
                <Account>
                    <PetPage refresh={this.toggleRefresh}/>
                </Account>
            </div>
        );
    }
}