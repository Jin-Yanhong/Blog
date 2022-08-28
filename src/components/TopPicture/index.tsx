import { swiperEffect } from '../../enums';
import { useState, useEffect } from 'react';
import { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getBingWallpaper } from '../../api/home';
import { setStorage, getStorage } from '../../utils';
import './index.scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

function TopPicture() {
	//  `componentDidMount`, `componentDidUpdate`,  `componentWillUnmount`
	const [background, setBackground] = useState([]);

	let backgroundObj: any = getStorage('background') || undefined;

	useEffect(() => {
		if (backgroundObj) {
			setBackground(backgroundObj);
		} else {
			getBingWallpaper()
				.then(res => {
					setBackground(res);
					setStorage('background', res);
				})
				.catch(err => {});
		}
	}, []);

	return (
		<div className='TopPicture'>
			<Swiper
				modules={[EffectFade, Autoplay]}
				autoplay={{
					delay: 3000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				effect={swiperEffect.Fade}
				className='sliderWrapper'
				fadeEffect={{
					crossFade: false,
				}}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
			>
				{background.map((img: string) => {
					return (
						<SwiperSlide key={img} className='sliderItem'>
							<div className='imageContainer' style={{ backgroundImage: `url(${img})` }}></div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default TopPicture;
