declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare module '*.svg' {
	const content: (props: React.SVGProps<SVGElement>) => React.ReactElement;
	export default content;
}

declare module '*.svg?icon' {
	const content: (props: React.SVGProps<SVGElement>) => React.ReactElement;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.json' {
	const content: string;
	export default content;
}

declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}
