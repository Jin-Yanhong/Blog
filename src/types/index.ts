export type work = {
	_id: string;
	tag: Array<string>;
	name: String;
	desc: String;
	technology: Array<string>;
	screenShortUrl: String;
};

export interface menuItem {
	name: string;
	path: string;
	activeClass: string;
}
