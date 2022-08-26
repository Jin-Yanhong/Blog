import './index.scss';

interface BlockTitleProps {
	title: string;
}
function BlockTitle(props: BlockTitleProps) {
	let { title } = props;

	return (
		<div className='BlockTitle flex flex-between'>
			<span className='hr hr-left'></span>
			<span className='title enFont-Oswald-ExtraLight'>{title.toUpperCase()}</span>
			<span className='hr hr-right'></span>
		</div>
	);
}

export default BlockTitle;
