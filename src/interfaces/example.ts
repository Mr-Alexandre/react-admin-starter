export interface IExample {
	id: number;
	title: number;
}

export interface IExampleCreateData extends Omit<IExample, 'id'> {}

export interface IExampleChangeData extends IExample {}

export type TExampleReadAllResponse = IExample[];
export type TExampleReadResponse = IExample;
export type TExampleUpdateResponse = IExample;
export type TExampleCreateResponse = IExample;
export type TExampleDeleteResponse = null;

