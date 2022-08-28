import './index.scss';

interface BlockTitleProps {
	imgName?: string;
}
function BlockTitle(props: BlockTitleProps) {
	let imgName = props.imgName ?? '1';
	let img = require(`../../static/img/banner/${imgName}.jpg`);

	return <div className='BannerImg' style={{ backgroundImage: 'url(' + img + ')' }}></div>;
}

export default BlockTitle;
