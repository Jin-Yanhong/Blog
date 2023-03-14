import request from '../utils/request';

export function getBingWallpaper(): Promise<any> {
    return request({
        url: 'links/bingWallpaper',
        method: 'get',
    });
}

export function getSkillsList(pageSize: number, pageNum: number): Promise<any> {
    return request({
        url: 'skills/getSkillsList',
        method: 'get',
        params: { pageSize, pageNum },
    });
}

export function getWorkList(pageSize: number, pageNum: number): Promise<any> {
    return request({
        url: 'work/getWorkList',
        method: 'get',
        params: { pageSize, pageNum },
    });
}

export function getOuterLinks(): Promise<any> {
    return request({
        url: 'links/getOuterLinks',
        method: 'get',
    });
}

export function getSystemConfig(condition: any): Promise<any> {
    return request({
        url: '/system/getSystemConfig',
        method: 'get',
        params: condition,
    });
}
export function requestDictByKey(key: number): Promise<any> {
    return request({
        url: 'dict/useDict/' + key,
        method: 'get',
    });
}

