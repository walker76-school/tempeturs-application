import React from 'react';

export class NavComponent extends React.Component {

	constructor() {
		super();

		{/* Bind the onClick function so it knows about the state */}
		this.onClick = this.onClick.bind(this);
	}

	onClick(){

		{/* Call the callBack function that we passed in to update the parent state and render the proper component */}
		this.props.callBack(this.props.name);
	}

	render() {
		return (
			<div className="navComponent" onClick={this.onClick}>
				<p>{this.props.name}</p>
			</div>
		);
	}
}