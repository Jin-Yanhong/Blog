export type work = {
    _id: string;
    tag: Array<string>;
    name: String;
    desc: String;
    technology: Array<string>;
    screenShortUrl: String;
};
export type article = {
    _id: string;
    author: string;
    date: string;
    subTitle: string;
    summary: string;
    title: string;
    content: string;
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

export interface ErrorMsg {
    message: string;
    [key: string]: any;
}

export interface dictValue {
    label: string;
    value: number;
}
export interface dictValueList {
    value: Array<dictValue>;
}
