export function isPromise(value: unknown): value is Promise<typeof value> {
	return !!value
		&& (<Promise<typeof value>>value).then !== undefined
		&& (typeof value === 'object' || typeof value === 'function')
}

export function wrapIntoPromise<T = unknown>(value: unknown): Promise<T> {
	if (isPromise(value)) {
		return value as Promise<T>;
	}
	return Promise.resolve<T>(value as T);
}
