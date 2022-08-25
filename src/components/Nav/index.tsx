import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import setting from '../../settings';

interface navStatus {
	background?: number[];
}

interface navProps {
	className?: string;
}

export default class Nav extends React.Component<navProps, navStatus> {
	constructor(status: navStatus) {
		super({});
		this.state = {
			background: [1, 2, 3],
		};
	}
	handleHashChange() {
		console.log(window.location.hash);
	}
	render() {
		return (
			<div>
				<div className='nav flex flex-between'>
					<div className='nav-left flex flex-between'>
						<span className='iconfont icon-menu'></span>
					</div>
					<div className='nav-right'>
						{setting.navList.map(nav => {
							return (
								<NavLink to={nav.path} key={nav.path} className={({ isActive }) => (isActive ? setting.defaultActiveClass + ' ' + setting.defaultNavClass : setting.defaultNavClass)}>
									<span onClick={this.handleHashChange}>{nav.name.toUpperCase()}</span>
								</NavLink>
							);
						})}
					</div>
				</div>
				<div className='bg-img'>
					{this.state.background.map((nav, index) => {
						return (
							<div key={index}>
								<img src='' alt='' />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
