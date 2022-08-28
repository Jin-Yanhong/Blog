import './index.scss';

interface BlockTitleProps {
	title: string;
	lineColor?: string;
}
function BlockTitle(props: BlockTitleProps) {
	let { title, lineColor } = props;

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>
					<div className='BlockTitle flex flex-between' style={{ borderColor: lineColor }}>
						<span className='hr hr-left' style={{ background: lineColor }}></span>
						<span className='innerTitle enFont-Oswald-ExtraLight' style={{ color: lineColor }}>
							{title.toUpperCase()}
						</span>
						<span className='hr hr-right' style={{ background: lineColor }}></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlockTitle;
