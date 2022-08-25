import React from 'react';
import { componentProps, componentState } from '../../types';

export default class Home extends React.Component<componentProps, componentState> {
	render() {
		return (
			<div className='pageContent pageSize'>
				<div>Home</div>
			</div>
		);
	}
}
