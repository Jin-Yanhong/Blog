import { Component } from 'react';
import { work } from '../../types';
import './index.scss';

type WorkItemType = Partial<work>;

export default class WorkItem extends Component<WorkItemType, WorkItemType> {
	constructor(props: WorkItemType) {
		super(props);
		this.state = {};
	}

	render() {
		let item: Partial<work> = this.props;
		return (
			<div>
				<div className="workItem shadow-sm">
					<div className="image" style={{ backgroundImage: `url(${item.screenShortUrl})` }}></div>
					<p className="name">{item.name}</p>
					<p className="classIfy">分类 : {item.tag}</p>
					<p className="tech">
						<span>技术栈 : </span>
						{item.technology?.map((tech, index) => {
							return (
								<span key={index} className="techItem">
									{tech}
								</span>
							);
						})}
					</p>
					<div className="desc">{item.desc}</div>
				</div>
			</div>
		);
	}
}
