export function toNumber(value: unknown): number {
	return parseFloat(<string>value);
}
