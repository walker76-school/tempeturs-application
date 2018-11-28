import React from 'react';
import {Landing} from './landing';
import {Services} from 'js/home/services';
import {Helmet} from 'react-helmet';

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Home</title>
				</Helmet>
				{/* Breaks the home page into two separate components*/}
				<Landing />
				<Services/>
			</div>
		);
	}
}