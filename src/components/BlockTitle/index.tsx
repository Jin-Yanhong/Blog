import './index.scss';

interface BlockTitleProps {
	title: string;
}
function BlockTitle(props: BlockTitleProps) {
	let { title } = props;

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<div className='BlockTitle flex flex-between'>
						<span className='hr hr-left'></span>
						<span className='title enFont-Oswald-ExtraLight'>{title.toUpperCase()}</span>
						<span className='hr hr-right'></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlockTitle;
