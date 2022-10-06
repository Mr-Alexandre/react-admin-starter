export function isServer(): boolean {
	return !isBrowser();
}

export function isBrowser(): boolean {
	return !!typeof window;
}
