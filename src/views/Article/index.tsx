import React from 'react';

import { BannerImg } from '../../components';
import { getDate } from '../../utils';

interface WorksProps {
	[key: string]: any;
}
interface WorksState {
	imgName: string;
}
export default class Article extends React.Component<WorksProps, WorksState> {
	constructor(state: WorksProps) {
		super(state);
		this.state = {
			imgName: getDate().imageIndex.toString(),
		};
	}

	componentDidMount(): void {}

	render() {
		return (
			<div className='pageContent pageSize'>
				<BannerImg imgName='article'></BannerImg>
			</div>
		);
	}
}
