import React, { Component } from 'react';
import {getSitters} from 'js/api/appointmentAPI';
import {SitterComponent} from 'js/account/components/sitterComponent';

export default class SitterList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sitters: ''
		};
	}

	componentDidMount(){
		getSitters(this.props.zip)
			.then(
				(response) => {
					this.setState({
						sitters: response
					});
				}).catch((error) => {
					alert(error);
		});


	}

	render() {
		let content = (<div>There are no sitters available</div>);

		if(this.state.sitters.length > 0){
			content = this.state.sitters.map((i, index) => <SitterComponent id={this.props.id} sitter={this.state.sitters[index]}/>);
		}

		return (
			<div>
				{content}
			</div>
		);
	}
}