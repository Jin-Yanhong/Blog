export interface menuItem {
	name: string;
	path: string;
	activeClass: string;
}

export type componentProps = {
	[key: string]: any;
};
export type componentState = {
	[key: string]: any;
};
export type work = {
	_id: string;
	tag: Array<string>;
	name: String;
	desc: String;
	technology: Array<string>;
	screenShortUrl: String;
};
