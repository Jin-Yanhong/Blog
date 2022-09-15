import React from 'react';
import { getWorkList } from '../../api/home';
import { BannerImg, WorkItem } from '../../components';
import { work } from '../../types';
import { getDate, getStorage, setStorage } from '../../utils';
import './index.scss';

interface WorksProps {
	[key: string]: any;
}

interface WorksState {
	imgName: string;
	works: Array<work>;
}

export default class Works extends React.Component<WorksProps, WorksState> {
	constructor(state: WorksProps) {
		super(state);
		this.state = {
			imgName: getDate().imageIndex.toString(),
			works: [],
		};
		// 将组建的方法绑定到组件实例上去
		// this.setContainerHeight = this.setContainerHeight.bind(this);
	}

	componentDidMount(): void {
		let worksObj: any = getStorage('works');
		if (worksObj) {
			this.setState({
				works: worksObj,
			});
		} else {
			getWorkList(10, 1)
				.then((res) => {
					this.setState({
						works: res,
					});
					setStorage('works', res);
				})
				.catch((err) => {});
		}
	}

	render() {
		let { imgName = '1', works } = this.state;
		let img = require('../../static/img/banner/' + imgName + '.jpg');

		return (
			<div className="worksPage">
				<BannerImg className="BannerImg" imgName={img} title="works"></BannerImg>
				<div className="workList container">
					<div className="row">
						{works?.map((el: work) => {
							return (
								<div key={el._id} className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
									<WorkItem {...el} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
