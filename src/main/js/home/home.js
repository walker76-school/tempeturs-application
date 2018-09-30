import React from 'react';
import {Landing} from './landing';
import {Services} from 'js/home/services';

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Landing />
				<Services/>
			</div>
		);
	}
}