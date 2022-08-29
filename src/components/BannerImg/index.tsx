import { useEffect, useState } from 'react';
import BlockTitle from '../BlockTitle';

import './index.scss';
interface propsType {
	imgName?: string;
	title: string;
	className?: string;
}
interface stateType {
	height: number;
	visible: boolean;
}

function BannerImg(props: propsType, state: stateType) {
	let [height, setHeight] = useState(0);
	let [visible, setVisible] = useState(false);
	let { imgName, title } = props;

	const handleContextMenu = function (event: React.SyntheticEvent<HTMLImageElement, Event>) {
		event.preventDefault();
		console.log(event);
	};

	const handleImageOnLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
		let { naturalWidth, naturalHeight } = event.currentTarget;
		let rate = naturalWidth / naturalHeight;
		let height: number = window.innerWidth / rate;
		setHeight(height);
		setVisible(height !== 0);
		window.addEventListener('resize', () => {
			setHeight(window.innerWidth / rate);
		});
	};

	return (
		<div className="BannerImg">
			<div className="titleBox flex flex-center" style={{ height, visibility: visible ? 'visible' : 'hidden' }}>
				<BlockTitle title={title}></BlockTitle>
			</div>
			<img
				src={imgName}
				className="img"
				onLoad={(e) => handleImageOnLoad(e)}
				onContextMenu={(e) => handleContextMenu(e)}
			/>
		</div>
	);
}

export default BannerImg;
