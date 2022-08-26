import './index.scss';

type skillProps = {
	[key: string]: any;
};

function Skill(props: skillProps) {
	let { color, name, score } = props;
	return (
		<div className='skillItem flex flex-between' style={{ color: color }}>
			<span className='name'>{name}</span>
			<div className='container' style={{ borderColor: color }}>
				<span className='bar' style={{ backgroundColor: color, width: score + '%' }}></span>
			</div>
			<span className='score'>{score}%</span>
		</div>
	);
}

export default Skill;
