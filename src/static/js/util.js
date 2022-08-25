/**
 *
 * @param { string } url 需要获取参数的 url 地址，默认当前 href
 * @returns
 */
export function getUrlParams(url) {
    let str = url || location.href
    let num = str.indexOf('?')
    if (num !== -1) {
        str = str.substr(num + 1)
        let arr = str.split('&')
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            num = arr[i].split('=')
            obj[num[0]] = num[1]
        }
        return obj
    } else {
        return {}
    }
}
