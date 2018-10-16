import React from 'react';
import {Landing} from './landing';
import {Services} from 'js/home/services';

export class Home extends React.Component {
	render() {
		return (
			//Broken into two different components
			<div>
				<Landing />
				<Services/>
			</div>
		);
	}
}