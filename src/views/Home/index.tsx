import React, { useState, useEffect } from 'react';
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BlockTitle, ContactUs, Skill } from '../../components';
import { getProjectList } from '../../api/home';
import { swiperEffect } from '../../enums';
import { work } from '../../types';
import { setStorage, getStorage } from '../../utils';

import './index.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-coverflow';

interface homeProps {
	works?: Array<work>;
	skills?: Array<work>;
	children?: JSX.Element | JSX.Element[];
}

const Home: React.FunctionComponent<homeProps> = function (props: homeProps) {
	let [works, setWorks] = useState([]);

	let worksObj: any = getStorage('works') || undefined;

	useEffect(() => {
		if (worksObj) {
			setWorks(worksObj);
		} else {
			getProjectList(10, 1)
				.then(res => {
					setWorks(res);
					setStorage('works', res);
				})
				.catch(err => {});
		}
	}, []);

	return (
		<div className='pageContent pageSize'>
			<BlockTitle title='my works'></BlockTitle>
			<div className='sliderContainer flex  flex-center flex-center-column'>
				<Swiper
					modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
					coverflowEffect={{
						rotate: 6,
						stretch: 0,
						depth: 0,
						modifier: 3,
						slideShadows: true,
					}}
					autoplay={{
						delay: 1000,
						pauseOnMouseEnter: true,
						disableOnInteraction: false,
					}}
					effect={swiperEffect.CoverFlow}
					className='sliderWrapper'
					spaceBetween={10}
					slidesPerView={5}
					loop={true}
					navigation
					pagination
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
			<Skill></Skill>
			<BlockTitle title='contact us'></BlockTitle>
			<ContactUs></ContactUs>
		</div>
	);
};

export default Home;
