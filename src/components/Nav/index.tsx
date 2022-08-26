import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import setting from '../../settings';

interface navStatus {
	background?: number[];
	activeIdx?: number;
}

interface navProps {}

export default class Nav extends React.Component<navProps, navStatus> {
	constructor(props: navProps) {
		super(props);
		this.state = {
			background: [1, 2, 3],
			activeIdx: 0,
		};
	}
	navChange(idx: number) {
		return () => {
			this.setState({
				activeIdx: idx,
			});
		};
	}
	render() {
		let { background, activeIdx } = this.state;
		return (
			<div className='top'>
				<div className='nav flex flex-between'>
					<div className='nav-left flex flex-between'>
						<span className='iconfont icon-menu'></span>
					</div>
					<div className='nav-right'>
						{setting.navList.map((nav, index) => {
							return (
								<NavLink to={nav.path} key={nav.path} className={({ isActive }) => (isActive ? setting.defaultActiveClass + ' ' + setting.defaultNavClass : setting.defaultNavClass)}>
									<span onClick={this.navChange(index)}>{nav.name.toUpperCase()}</span>
								</NavLink>
							);
						})}
					</div>
				</div>
				<div className='topImg flex flex-center'>
					{background?.map((item: number, index: number) => {
						return index === activeIdx ? <div key={index} className='topImgContainer' style={{ backgroundImage: `url(${require('../../static/img/' + item + '.jpg')})` }}></div> : '';
					})}
				</div>
			</div>
		);
	}
}
