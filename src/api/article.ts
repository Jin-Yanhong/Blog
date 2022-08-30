import request from '../utils/request';

export function getArticleList(pageSize: number, pageNum: number): Promise<any> {
	return request({
		url: 'article/getArticleList',
		method: 'get',
		params: { pageSize, pageNum },
	});
}

export function getArticleContentById(id: string): Promise<any> {
	return request({
		url: 'article/getArticleContentById/' + id,
		method: 'get',
	});
}
