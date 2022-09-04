import './index.scss';

interface BlockTitleProps {
	title: string;
	lineColor?: string;
	className?: string;
}

function BlockTitle(props: BlockTitleProps) {
	let { title, lineColor } = props;

	return (
		<div className="container">
			<div className="BlockTitle flex flex-between" style={{ borderColor: lineColor }}>
				<span className="hr hr-left" style={{ background: lineColor }}></span>
				<span className="innerTitle enFont-ExtraLight" style={{ color: lineColor }}>
					{title.toUpperCase()}
				</span>
				<span className="hr hr-right" style={{ background: lineColor }}></span>
			</div>
		</div>
	);
}

export default BlockTitle;
