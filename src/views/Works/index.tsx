import React from 'react';
import { BannerImg, BlockTitle } from '../../components';
import { work } from '../../types';
import { getDate, getStorage } from '../../utils';
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
	}

	componentDidMount(): void {
		let worksObj: any = getStorage('works') || undefined;
		this.setState({
			works: worksObj,
		});
	}

	render() {
		let { imgName = '1', works } = this.state;
		return (
			<div>
				<div className='topContainer'>
					<div className='BannerImg'>
						<BannerImg imgName={imgName}></BannerImg>
					</div>
					<div className='title'>
						<BlockTitle title='my works' lineColor='#fff'></BlockTitle>
					</div>
				</div>
				<div className='workList container'>
					<div className='row'>
						{works?.map((el: work) => {
							return (
								<div key={el._id} className='col-2'>
									<div className='workItem'>
										<div className='image' style={{ backgroundImage: `url(${el.screenShortUrl})` }}></div>
										<p className='name'>{el.name}</p>
										<p className='classIfy'>分类 : {el.tag}</p>
										<p className='tech'>
											<span>技术栈 : </span>
											{el.technology.map((tech, index) => {
												return (
													<span key={index} className='techItem'>
														{tech}
													</span>
												);
											})}
										</p>
										<div className='desc'>{el.desc}</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
