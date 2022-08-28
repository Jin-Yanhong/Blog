import React from 'react';
import { BannerImg } from '../../components';
import { getDate } from '../../utils';

interface WorksProps {
	[key: string]: any;
}
interface WorksState {
	imgName: string;
}
export default class Works extends React.Component<WorksProps, WorksState> {
	constructor(state: WorksProps) {
		super(state);
		this.state = {
			imgName: getDate().imageIndex.toString(),
		};
	}

	componentDidMount(): void {
		console.log(this.state.imgName);
	}

	render() {
		let { imgName = '1' } = this.state;
		return (
			<div className='pageContent pageSize'>
				<BannerImg imgName={imgName}></BannerImg>
			</div>
		);
	}
}
