import React from 'react';

export class Landing extends React.Component {
	render() {
		return (
			<header className="header" id="header">
				<a className="loginlink animated fadeInUp delay-1s servicelink" href="#login">Login</a>

				<div className="container">
					<figure className="logo animated fadeInDown delay-07s">
						<a href="#"><img src="img/logo.png" alt=""></img></a>
					</figure>
					<h1 className="animated fadeInDown delay-07s">Welcome To Tempeturs</h1>
					<ul className="we-create animated fadeInUp delay-1s">
						<li>Tailored to the modern pet owner.</li>
					</ul>
					<a className="link animated fadeInUp delay-1s servicelink" href="#registerOwner">Register Owner</a>
					<a className="link animated fadeInUp delay-1s servicelink" href="#registerSitter">Register Sitter</a>
				</div>
			</header>
		);
	}
}