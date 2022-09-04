import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import setting from '../../settings';
import './index.scss';

interface navProps {
	className?: string;
}

function NavBar(props: navProps) {
	const navListRef = useRef<HTMLUListElement>(null);

	const toggleClass = () => {
		navListRef.current?.classList.toggle('heightAuto');
	};

	return (
		<div className="nav">
			<div className="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block desktop">
				<div className="brand">Logo</div>
				<ul className="navList">
					{setting.navList.map((nav) => {
						return (
							<li key={nav.path}>
								<NavLink
									to={nav.path}
									className={({ isActive }) => (isActive ? 'activeNavItem' + ' navItem' : 'navItem')}
								>
									<span>{nav.name.toUpperCase()}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none mobile">
				<div className="navbar">
					<span className="brand">Logo</span>
					<span className="iconfont icon-menu" onClick={() => toggleClass()}></span>
				</div>
				<ul className="navList" ref={navListRef}>
					{setting.navList.map((nav) => {
						return (
							<li key={nav.path}>
								<NavLink
									to={nav.path}
									className={({ isActive }) => (isActive ? 'activeNavItem' + ' navItem' : 'navItem')}
								>
									<span>{nav.name.toUpperCase()}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
