import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ISecondaryDetailProps } from '@domain/secondary/pages/detail/interface';
import { useTranslation, withTranslation } from 'react-i18next';

const SecondaryDetailPage: FC<ISecondaryDetailProps> = () => {
	const { id } = useParams();
	const { t } = useTranslation();

	return (
		<>
			<h1>
				{t('secondary:detailPage.title', 'Detail page with id: {{id}}', {
					id,
				})}
			</h1>
			<ul>
				<li>
					<Link to="/secondary">{t('common:nav.back', 'Back')}</Link>
				</li>
			</ul>
		</>
	);
};

export default withTranslation(['secondary'])(SecondaryDetailPage);
