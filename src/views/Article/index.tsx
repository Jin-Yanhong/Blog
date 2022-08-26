import React from 'react';
import { componentProps, componentState } from '../../types';

export default class Article extends React.Component<componentProps, componentState> {
	render() {
		return (
			<div className='pageContent pageSize'>
				<div>Article</div>
			</div>
		);
	}
}
