import React, { Component, createRef } from 'react';
import './index.scss';
interface propsType {}

export default class BackToTop extends Component<propsType> {
	private toTopRef = createRef<HTMLDivElement>();
	constructor(props: propsType) {
		super(props);
		this.ToTop = this.ToTop.bind(this);
	}

	componentDidMount(): void {
		let _this = this;
		document.addEventListener('scroll', function (e) {
			let classList = _this.toTopRef.current?.classList;
			let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
			if (scrollTop <= 100) {
				_this.toTopRef.current?.classList.remove('show');
			} else {
				if (!classList?.contains('show')) {
					_this.toTopRef.current?.classList.add('show');
				}
			}
		});
	}

	componentWillUnmount(): void {
		window.removeEventListener('scroll', () => {});
	}

	ToTop(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
	render() {
		return (
			<div
				className="BackToTop flex flex-center"
				onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
					this.ToTop(e);
				}}
				ref={this.toTopRef}
			>
				<div className="text flex flex-center-column">
					<i className="iconfont icon-fanhuidingbu"></i>
					<div>Top</div>
				</div>
			</div>
		);
	}
}
