import React from 'react';
import './index.scss';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import setting from '../../settings';

interface navStatus {}

interface navProps {
	className?: string;
}

export default class Nav extends React.Component<navProps, navStatus> {
	render() {
		return (
			<div className='nav flex flex-evenly'>
				<div>我的标识</div>
				{setting.menu.map(nav => {
					return (
						<NavLink to={nav.path} key={nav.path} className={({ isActive }) => (isActive ? setting.defaultActiveClass + ' ' + setting.defaultNavClass : setting.defaultNavClass)}>
							<Button icon={nav.icon}>{nav.name}</Button>
						</NavLink>
					);
				})}
			</div>
		);
	}
}
