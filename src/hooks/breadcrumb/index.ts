import { BreadcrumbMatch } from 'use-react-router-breadcrumbs';

const useBreadcrumbTranslation = (match: BreadcrumbMatch) => {
	const indexName = 'home';
	const path = `${indexName}${match.pattern.path}`.replace(/^\/|\/$/gm, '')
		.split('/')
		.map(item => {
			if (item[0] == ':') {
				return `[${item.slice(1, item.length)}]`
			}
			return item;
		})
		.join('.')
		.concat('.leaf');
	const alternative = match.pathname?.replace(/.*\//gm, '') || indexName;

	return {
		key: `breadcrumb:${path}`,
		alternativeValue: alternative,
	}
}

export {
	useBreadcrumbTranslation
}
