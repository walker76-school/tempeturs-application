import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import * as Users from 'js/api/usersAPI';
import {getSitters} from 'js/api/appointmentAPI';
import SitterComponent from 'js/account/components/sitterComponent';

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
					let sitters = response.map((i, index) =>
						<SitterComponent sitter={response[index]}/>
					);
					this.setState({
						sitters: sitters
					});
				}).catch((error) => {
			alert(error);
		});

	}

	render() {
		return (
			<div>
				{this.state.sitters}
			</div>
		);
	}
}