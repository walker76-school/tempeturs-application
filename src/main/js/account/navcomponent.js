import React from 'react';

export class NavComponent extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.callBack(this.props.name);
	}

	render() {
		return (
			<div className="navComponent" onClick={this.handleClick}>
				<p>{this.props.name}</p>
			</div>
		);
	}
}