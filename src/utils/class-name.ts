export function concatClassName(...classNames: Array<string | undefined>): string {
	return classNames.filter(Boolean).join(' ');
}
