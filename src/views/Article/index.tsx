import React from 'react';
import { BannerImg, BlockTitle } from '../../components';
import { getArticleList, getArticleContentById } from '../../api/article';
import { setStorage, getStorage } from '../../utils';
import { article } from '../../types';
import './index.scss';

interface articleProps {}

interface articleState {
	articleList: Array<article>;
	articleDetail: article;
}
export default class Article extends React.Component<articleProps, articleState> {
	constructor(state: articleProps) {
		super(state);
		this.state = {
			articleList: [],
			articleDetail: {
				_id: '',
				author: '暂无数据',
				date: '暂无数据',
				subTitle: '暂无数据',
				summary: '暂无数据',
				title: '暂无数据',
				content: '暂无数据',
			},
		};
	}

	getArticleContent(id: string) {
		let _this = this;

		let idKey: string = `${id}`;
		let articleDetailObj: any = getStorage(idKey) || undefined;
		if (articleDetailObj) {
			_this.setState({
				articleDetail: articleDetailObj,
			});
		} else {
			getArticleContentById(id)
				.then(res => {
					_this.setState({
						articleDetail: res,
					});
					setStorage(idKey, res);
				})
				.catch(err => {});
		}
	}
	componentDidMount(): void {
		let _this = this;
		let articleListObj: any = getStorage('articleList') || undefined;
		if (articleListObj) {
			_this.setState({
				articleList: articleListObj,
			});

			_this.getArticleContent(articleListObj[0]._id);
		} else {
			getArticleList(10, 1)
				.then(res => {
					_this.setState({
						articleList: res,
					});
					_this.getArticleContent(res[0]._id);
					setStorage('articleList', res);
				})
				.catch(err => {});
		}
	}

	render() {
		let { articleList, articleDetail } = this.state;

		return (
			<div>
				<div className='topContainer'>
					<div className='BannerImg'>
						<BannerImg imgName='article'></BannerImg>
					</div>
					<div className='title'>
						<BlockTitle title='article' lineColor='#fff'></BlockTitle>
					</div>
				</div>

				<div className='articleModule container'>
					<div className='row'>
						<div className='col-3'>
							<div className='catalog'>
								<p className='name'> 目录索引 </p>
								<ul>
									{articleList.map((article, index) => {
										return (
											<li
												onClick={() => {
													this.getArticleContent(article._id);
												}}
												key={article._id}
												className='List'
											>
												<p className='title'>{article.title}</p>
												<p className='subTitle'>{article.subTitle}</p>
												<p className='summary'>{article.summary}</p>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className='col-9'>
							<div className='articleDetails'>
								<h1 className='title'>{articleDetail.title}</h1>
								<h3 className='subTitle'>{articleDetail.subTitle}</h3>
								<p className='summary'>
									<span>{articleDetail.summary}</span>
								</p>
								<div className='Info'>
									{articleDetail.author} @ {articleDetail.date}
								</div>
								<hr />
								<p className='content'>{articleDetail.content}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
