import React, { useState, useEffect } from 'react';
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { swiperEffect } from '../../enums';
import { BlockTitle, Skill } from '../../components';
import { work } from '../../types';
import { getSkillsList, getProjectList } from '../../api/home';
import { RootState } from '../../store/type';
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
	let sysConfig = useSelector((state: RootState) => state.sysConfig.sysConfig);

	let {
		contactInfo: { address, email, phone },
	} = sysConfig;

	let [works, setworks] = useState([]);
	let [skills, setSkills] = useState([]);

	useEffect(() => {
		getProjectList(10, 1)
			.then(res => {
				setworks(res);
			})
			.catch(err => {});
		getSkillsList()
			.then(res => {
				setSkills(res);
			})
			.catch(err => {});
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

			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<p> {address} </p>
						<p> {email} </p>
						<p> {phone}</p>
					</div>
					<div className='col-6'>这里放一张地图</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
