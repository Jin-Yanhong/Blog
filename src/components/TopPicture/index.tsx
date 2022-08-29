import { useEffect, useState } from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImg from '../BannerImg';
import { getBingWallpaper } from '../../api/home';
import { swiperEffect } from '../../enums';
import { getStorage, setStorage } from '../../utils';

import './index.scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

function TopPicture() {
	//  `componentDidMount`, `componentDidUpdate`,  `componentWillUnmount`
	const [background = [], setBackground] = useState([]);

	let backgroundObj: any = getStorage('background');

	useEffect(() => {
		if (backgroundObj) {
			setBackground(backgroundObj);
		} else {
			getBingWallpaper()
				.then((res) => {
					setBackground(res);
					setStorage('background', res);
				})
				.catch((err) => {});
		}
	}, []);

	return (
		<div className="TopPicture">
			<Swiper
				modules={[EffectFade, Autoplay]}
				autoplay={{
					delay: 3000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				effect={swiperEffect.Fade}
				className="sliderWrapper"
				fadeEffect={{
					crossFade: false,
				}}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
			>
				{background.map((img: string) => {
					return (
						<SwiperSlide key={img} className="sliderItem">
							<BannerImg imgName={img} title="Hello" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default TopPicture;
