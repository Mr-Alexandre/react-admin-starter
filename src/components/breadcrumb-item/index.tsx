import React, { FC } from 'react';
import { IBreadcrumbItemProps } from '@components/breadcrumb-item/interface';
import { useTranslation } from 'react-i18next';
import { useBreadcrumbTranslation } from '@hooks/breadcrumb';
import { Link } from 'react-router-dom';

const BreadcrumbItem: FC<IBreadcrumbItemProps> = ({
	match,
	location,
}) => {
	const { t } = useTranslation();
	const { key, alternativeValue } = useBreadcrumbTranslation(match);

	return (
		<span data-translation-key={key}>
			{location.pathname != match.pathname
				? (
					<Link to={match.pathname}>
						{t(key, alternativeValue, {
							...match.params
						})}
					</Link>
				)
				: t(key, alternativeValue, {
					...match.params
				})
			}

		</span>
	)
}

export default BreadcrumbItem;
