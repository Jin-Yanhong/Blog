import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getWorkList } from '../../api/home';
import { BlockTitle, ContactUs, Skill, TopPicture, WorkItem } from '../../components';
import { work } from '../../types';
import { getStorage, setStorage } from '../../utils';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import './index.scss';

interface homeProps {
	works?: Array<work>;
	skills?: Array<work>;
	children?: JSX.Element | JSX.Element[];
}

const Home: React.FunctionComponent<homeProps> = function (props: homeProps) {
	const [works, setWorks] = useState([]);

	const worksObj: any = getStorage('works') || undefined;

	useEffect(() => {
		if (worksObj) {
			setWorks(worksObj);
		} else {
			getWorkList(10, 1)
				.then((res) => {
					setWorks(res);
					setStorage('works', res);
				})
				.catch((err) => {});
		}
	}, []);

	return (
		<div>
			<div className="topImage">
				<TopPicture />
			</div>
			<BlockTitle title="my works"></BlockTitle>
			<div className="sliderContainer flex  flex-center flex-center-column">
				<Swiper
					modules={[Autoplay]}
					className="sliderWrapper"
					autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 20 },
						480: { slidesPerView: 1, spaceBetween: 30 },
						576: { slidesPerView: 2, spaceBetween: 10 },
						768: { slidesPerView: 3, spaceBetween: 10 },
						992: { slidesPerView: 4, spaceBetween: 10 },
						1200: { slidesPerView: 5, spaceBetween: 10 },
						1400: { slidesPerView: 6, spaceBetween: 10 },
					}}
					spaceBetween={10}
					slidesPerView={5}
					loop={true}
				>
					{works?.map((el: work) => {
						return (
							<SwiperSlide key={el._id} className="sliderItem flex flex-center">
								<WorkItem {...el}> </WorkItem>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<BlockTitle title="my skills"></BlockTitle>
			<Skill></Skill>
			<BlockTitle title="contact us"></BlockTitle>
			<ContactUs></ContactUs>
		</div>
	);
};

export default Home;
