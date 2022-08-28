export function getDate() {
	let date = new Date();
	return {
		date: `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()} 周${'日一二三四五六'.charAt(date.getDay())}`,
		imageIndex: date.getDay() + 1,
	};
}

export function getStorage(key: string): Array<any> | any {
	let str = window.localStorage.getItem(key);
	if (str) {
		return JSON.parse(str);
	} else {
		return undefined;
	}
}

export function setStorage(key: string, value: any): void {
	let str = JSON.stringify(value);
	window.localStorage.setItem(key, str);
}
