import {User} from "entities/User";


export enum ArticleSortField {
	VIEWS = 'views',
	TITLE = 'title',
	CREATED = 'createdAt',
}

export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	title?: string;
	paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
	ALL = "ALL",
	IT = "IT",
	SCIENCE = "SCIENCE",
	ECONOMICS = "ECONOMICS",

}

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	user: User;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}

export enum ArticleView {
	BIG = "big",
	SMALL = "small"
}