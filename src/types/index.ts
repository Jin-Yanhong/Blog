export type work = {
	_id: string;
	tag: Array<string>;
	name: String;
	desc: String;
	technology: Array<string>;
	screenShortUrl: String;
};

export type skill = {
	_id: string;
	color: string;
	name: String;
	score: String;
};

export interface menuItem {
	name: string;
	path: string;
	activeClass: string;
}
