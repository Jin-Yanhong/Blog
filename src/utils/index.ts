import { requestDictByKey } from '../api/home';
import { dictValue, dictValueList } from '../types/index';
/**
 *
 * @param collection 翻译需要对照的数据
 * @param value 待翻译的值
 * @param collectionField 对照集合中的字段 默认 'value'
 * @param collectionLabel 对照集合中的字段名称 默认 'label'
 * @returns
 */
export function fieldTranslate(collection: Array<dictValue>, value: number | string, collectionField: keyof dictValue = 'value', collectionLabel: keyof dictValue = 'label') {
    if (collection && value && value.toString().length) {
        if (Object.prototype.toString.call(collection) === '[object Array]') {
            let checked = collection.find((ele: dictValue) => {
                return ele[collectionField] == value;
            });

            let tips = (checked && checked[collectionLabel]) || 'Error';
            return tips;
        } else {
            console.log('fieldTranslate Error: the type of the first parameter must be array!');
            return '';
        }
    } else {
        console.log('fieldTranslate Error: please check function parameters!');
        return '';
    }
}

export async function getDictData(key: number) {
    let dict: Promise<dictValueList | any> = await requestDictByKey(key);
    return dict;
}

export function getDate(): { date: string; imageIndex: number } {
    let date = new Date();
    return {
        date: `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()} 周${'日一二三四五六'.charAt(date.getDay())}`,
        imageIndex: date.getDay() + 1,
    };
}

export function getStorage(key: string): Array<any> | any {
    let str: string = window.localStorage.getItem(key) ?? '';
    try {
        if (str) {
            return JSON.parse(str);
        } else {
            return undefined;
        }
    } catch (error: any) {
        console.log(error?.message);
        return undefined;
    }
}

export function setStorage(key: string, value: any): void {
    let str = JSON.stringify(value);
    window.localStorage.setItem(key, str);
}
