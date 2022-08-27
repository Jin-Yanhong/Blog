import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getOuterLinks } from '../../api/home';
import setting from '../../settings';
import './index.scss';

type FooterProps = {
	[key: string]: any;
};
function Footer(props: FooterProps) {
	let [links, setLinks] = useState([]);

	useEffect(() => {
		getOuterLinks()
			.then(res => {
				setLinks(res);
			})
			.catch(err => {});
	}, []);

	type linkType = {
		[key: string]: any;
	};

	return (
		<div className='footContainer'>
			<div className='container'>
				<div className='row'>
					<div className='col-8'>
						<div className='row'>
							<ul className='col-4'>
								{setting.navList.map(nav => {
									return (
										<li key={nav.path}>
											<NavLink to={nav.path} className={({ isActive }) => (isActive ? setting.defaultActiveClass + ' ' + setting.defaultNavClass : setting.defaultNavClass)}>
												<span>{nav.name.toUpperCase()}</span>
											</NavLink>
										</li>
									);
								})}
							</ul>

							{links.map((linkGroup: Array<linkType>, index: number) => {
								return (
									<ul className='col-4' key={index}>
										{linkGroup?.map((link: linkType, idx: number) => {
											return (
												<li key={idx}>
													<a href={link.link} target='_blank' title={link.name}>
														{link.name}
													</a>
												</li>
											);
										})}
									</ul>
								);
							})}
						</div>
					</div>
					<div className='col-4'>
						<div className='row'>
							<div className='col-6'>
								<div className='QrCode'>
									<img src='http://localhost:3000/images/qrcode.png' alt='' />
								</div>
							</div>
							<div className='col-6'>
								<div className='QrCode'>
									<img src='http://localhost:3000/images/qrcode.png' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<p className='copyright text-center'>{props?.copyright}</p>
		</div>
	);
}

export default Footer;
