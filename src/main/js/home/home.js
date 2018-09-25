import React from 'react';
import {Landing} from './landing';
import {About} from './about';
import NavBar from 'js/navigation/navbar';

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Landing />
				<NavBar />
				<About />
			</div>
		);
	}
}