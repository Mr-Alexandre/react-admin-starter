import { AxiosResponse } from 'axios';
import { PropType } from '@interfaces/properties';

export type TThenAxiosResponseProp<
	T extends Promise<AxiosResponse>,
	P extends keyof Awaited<T>
> = Promise<PropType<Awaited<T>, P>>;

export function thenAxiosResponseProp<
	T extends Promise<AxiosResponse>,
	P extends keyof Awaited<T>
>(request: T, key: P): TThenAxiosResponseProp<T, P> {
	// eslint-disable-next-line
	return request.then((res) => res[key as keyof AxiosResponse]);
}

export function thenAxiosResponseData<T extends Promise<AxiosResponse>>(
	request: T
) {
	return thenAxiosResponseProp(request, 'data');
}
