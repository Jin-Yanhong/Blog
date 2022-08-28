export function getDate() {
	let date = new Date();
	return {
		date: `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()} 周${'日一二三四五六'.charAt(date.getDay())}`,
		imageIndex: date.getDay() + 1,
	};
}
