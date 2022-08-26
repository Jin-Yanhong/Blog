import { swiperEffect } from '../../enums';
import { useState, useEffect } from 'react';
import { Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getBingWallpaper } from '../../api/home';
import './index.scss';

interface image {
	copyright: string;
	title: string;
	url: string;
}

function TopPicture() {
	//  `componentDidMount`, `componentDidUpdate`,  `componentWillUnmount`
	const [background, setBackground] = useState([]);
	useEffect(() => {
		getBingWallpaper()
			.then(res => {
				setBackground(res);
			})
			.catch(err => {});
	}, []);

	return (
		<div className='TopPicture'>
			<Swiper
				className='sliderWrapper'
				modules={[Pagination, EffectFade, Autoplay]}
				autoplay={{
					delay: 3600,
				}}
				spaceBetween={0}
				slidesPerView={1}
				onSwiper={swiper => {}}
				effect={swiperEffect.Creative}
				fadeEffect={{ crossFade: true }}
			>
				{background.map((img: image) => {
					return (
						<SwiperSlide key={img.url} className='sliderItem'>
							<div className='imageContainer' style={{ backgroundImage: `url(${img.url})` }}></div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default TopPicture;
