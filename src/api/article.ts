import request from '../utils/request';

export function getArticleList(pageSize: number, pageNum: number): Promise<any> {
	return request({
		url: 'article/getArticleList',
		method: 'get',
		params: { pageSize, pageNum },
	});
}
