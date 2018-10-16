import React, { Component } from 'react';

export default class SitterComponent extends React.Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick = () => {

	};

	render() {
		return (
			<div>
				<br/>
				<label>Name: {this.props.sitter['name']}</label> <br/>
				<label>Email: {this.props.sitter['principal']}</label> <br/>
				<label>Phone Number: {this.props.sitter['phoneNumber']}</label> <br/>
				<button onClick={this.onClick}>Book Sitter</button>
			</div>
		);
	}
}