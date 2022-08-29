import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getOuterLinks } from '../../api/home';
import setting from '../../settings';
import { getStorage, setStorage } from '../../utils';
import './index.scss';

type FooterProps = {
	[key: string]: any;
};

function Footer(props: FooterProps) {
	let [links, setLinks] = useState([]);
	let linksObj: any = getStorage('links') || undefined;
	useEffect(() => {
		if (linksObj) {
			setLinks(linksObj);
		} else {
			getOuterLinks()
				.then((res) => {
					setLinks(res);
					setStorage('links', res);
				})
				.catch((err) => {});
		}
	}, []);

	type linkType = {
		[key: string]: any;
	};

	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
						<div className="row">
							<ul className="col-4">
								<li>站内导航</li>
								{setting.navList.map((nav) => {
									return (
										<li key={nav.path}>
											<NavLink to={nav.path}>{nav.name}</NavLink>
										</li>
									);
								})}
							</ul>

							{links.map((linkGroup: Array<linkType>, index: number) => {
								return (
									<ul className="col-4" key={index}>
										{linkGroup?.map((link: linkType, idx: number) => (
											<li key={idx}>
												<a href={link.link} target="_blank" title={link.name}>
													{link.name}
												</a>
											</li>
										))}
									</ul>
								);
							})}
						</div>
					</div>
					<div className="d-none d-sm-none d-md-none col-lg-4 col-xl-4 col-xxl-4 d-lg-block d-xl-block d-xxl-block">
						<div className="row">
							<div className="col-6">
								<div className="QrCode">
									<p className="qrName">微信公众号</p>
									<img src="http://localhost:3000/images/qrcode.png" alt="" />
								</div>
							</div>
							<div className="col-6">
								<div className="QrCode">
									<p className="qrName">加我微信</p>
									<img src="http://localhost:3000/images/qrcode.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className="copyright">{props?.copyright}</p>
		</div>
	);
}

export default Footer;
