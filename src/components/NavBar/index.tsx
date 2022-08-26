import { useEffect } from 'react';
import { NavLink, useLocation, useHref, useLinkClickHandler } from 'react-router-dom';
import setting from '../../settings';
import './index.scss';

interface navProps {
	className?: string;
}

function NavBar(props: navProps) {
	let { pathname } = useLocation();

	useEffect(() => {}, []);

	return (
		<div className='nav flex flex-between'>
			<div className='nav-left flex flex-between'>
				<span className='iconfont icon-menu'></span>
			</div>
			<div className='nav-right'>
				{setting.navList.map(nav => {
					return (
						<NavLink to={nav.path} key={nav.path} className={({ isActive }) => (isActive ? setting.defaultActiveClass + ' ' + setting.defaultNavClass : setting.defaultNavClass)}>
							<span>{nav.name.toUpperCase()}</span>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}

export default NavBar;
