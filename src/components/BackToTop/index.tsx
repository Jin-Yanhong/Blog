import React, { Component, createRef } from 'react';
import './index.scss';

export default class BackToTop extends Component {
	private toTopRef = createRef<HTMLDivElement>();
	constructor(props: any) {
		super(props);
		this.ToTop = this.ToTop.bind(this);
	}

	componentDidMount(): void {
		const _this = this;
		document.addEventListener('scroll', function (e) {
			const classList = _this.toTopRef.current?.classList;
			const scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
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
		window.removeEventListener('scroll', function () {});
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
