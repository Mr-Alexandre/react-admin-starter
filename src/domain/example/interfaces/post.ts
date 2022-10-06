export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface IPostCreateData extends Omit<IPost, 'id'> {}

export interface IPostChangeData extends IPost {}

export type TPostReadAllResponse = IPost[];
export type TPostReadResponse = IPost;
export type TPostUpdateResponse = IPost;
export type TPostCreateResponse = IPost;
export type TPostDeleteResponse = null;
