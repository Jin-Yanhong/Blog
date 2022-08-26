import React from 'react';
import { Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BlockTitle, Skill } from '../../components';
import { componentProps, componentState, work } from '../../types';
import { getSkillsList, getProjectList, getBingWallpaper } from '../../api/home';
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

export default class Home extends React.Component<componentProps, componentState> {
	constructor(status: componentState) {
		super(status);
		this.state = {
			works: [],
			skills: [],
		};
	}

	componentDidMount(): void {
		let _this = this;
		getProjectList(10, 1)
			.then(res => {
				_this.setState({
					works: res,
				});
			})
			.catch(err => {});

		getSkillsList()
			.then(res => {
				_this.setState({
					skills: res,
				});
			})
			.catch(err => {});
	}
	render() {
		let { works, skills } = this.state;
		return (
			<div className='pageContent pageSize'>
				<BlockTitle title='my works'></BlockTitle>
				<div className='sliderContainer flex  flex-center flex-center-column'>
					<Swiper
						className='sliderWrapper'
						modules={[Pagination, EffectFade, Autoplay]}
						autoplay={{
							delay: 1000,
						}}
						spaceBetween={50}
						slidesPerView={5}
						onSwiper={swiper => {}}
					>
						{works?.map((el: work) => {
							return (
								<SwiperSlide key={el._id} className='sliderItem'>
									<div className='imageContainer' style={{ backgroundImage: `url(${el.screenShortUrl})` }}></div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<BlockTitle title='my skills'></BlockTitle>
				<div className='skillContainer'>
					{skills?.map((el: work) => {
						return <Skill key={el._id} {...el}></Skill>;
					})}
				</div>

				<BlockTitle title='contact us'></BlockTitle>
			</div>
		);
	}
}
