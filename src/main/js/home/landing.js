import React from 'react';
import NavItem from 'js/navigation/navitem';

export class Landing extends React.Component {
	render() {
		return (
			<div className="landing">

				<div className="landingNav">
					<button className="btn" type="register">Register</button>
					<button className="btn" type="login">Login</button>
				</div>

				<div className="landingBox">
					<h1>Tempeturs</h1>
					<p>A new solution in dog sitting</p>
					<ol>
						<li>First</li>
						<li>Second</li>
						<li>Third</li>
					</ol>
				</div>

				<div className="regBox">
					<ol>
						<li>First</li>
						<li>Second</li>
						<li>Third</li>
					</ol>
				</div>
			</div>
		);
	}
}