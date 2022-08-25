import React from 'react';
import { componentProps, componentState } from '../../types';

export default class ArticlePage extends React.Component<componentProps, componentState> {
	render() {
		return (
			<div className='pageContent pageSize'>
				<div>文章</div>
			</div>
		);
	}
}
