import React from 'react';
import { NavLink } from 'react-router-dom';
import { getOuterLinks } from '../../api/home';
import setting from '../../settings';
import { getStorage, setStorage } from '../../utils';
import './index.scss';

interface linkItem {
	link: string;
	name: string;
}

interface footerProps {
	copyright: string;
}

interface footerState {
	thanks: linkItem[];
	tools: linkItem[];
}

export default class Footer extends React.Component<footerProps, footerState> {
	constructor(props: footerProps, state: footerState) {
		super(props);
		this.state = {
			thanks: [],
			tools: [],
		};
	}
	componentDidMount(): void {
		let linksObj: any = getStorage('links') || undefined;

		if (linksObj) {
			this.setState({
				...linksObj,
			});
		} else {
			getOuterLinks()
				.then((res) => {
					console.log(res);
					this.setState({
						...res,
					});
					setStorage('links', res);
				})
				.catch((err) => {});
		}
	}

	render() {
		let { copyright } = this.props;
		let { thanks, tools } = this.state;
		return (
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
							<div className="row">
								<dl className="linkList col-3">
									<dt className="linkListTitle">站内导航</dt>
									{setting.navList.map((nav) => {
										return (
											<dd className="linkItem" key={nav.path}>
												<NavLink to={nav.path}>{nav.name}</NavLink>
											</dd>
										);
									})}
								</dl>

								<dl className="linkList col-3">
									<dt className="linkListTitle">灵感来自</dt>
									{thanks.map((link: linkItem, index) => {
										return (
											<dd className="linkItem" key={index}>
												<a href={link.link} target="_blank" rel="noopener noreferrer">
													{link.name}
												</a>
											</dd>
										);
									})}
								</dl>

								<dl className="linkList col-3">
									<dt className="linkListTitle">友情链接</dt>
									{tools.map((link: linkItem, index) => {
										return (
											<dd className="linkItem" key={index}>
												<a href={link.link} target="_blank" rel="noopener noreferrer">
													{link.name}
												</a>
											</dd>
										);
									})}
								</dl>

								<dl className="linkList col-3">
									<dt className="linkListTitle">加入我们</dt>
									<dd className="linkItem">
										<a
											href="https://github.com/Jin-Yanhong"
											target="_blank"
											rel="noopener noreferrer"
										>
											Github
										</a>
									</dd>
								</dl>
							</div>
						</div>
						<div className="d-none d-sm-none d-md-none col-lg-3 col-xl-3 col-xxl-3 d-lg-block d-xl-block d-xxl-block">
							<div className="QRCode">
								<p className="name">微信</p>
								<img src={process.env.REACT_APP_ASSETS_URL + 'images/qrcode.png'} alt="" />
							</div>
						</div>
					</div>
				</div>
				<p className="copyright">{copyright}</p>
			</div>
		);
	}
}
