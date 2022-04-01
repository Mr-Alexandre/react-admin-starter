import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ISecondaryDetailProps } from '@pages/secondary/detail/interface';
import { useTranslation } from 'react-i18next';

const SecondaryDetailPage: FC<ISecondaryDetailProps> = () => {
	const { id } = useParams();
	const { t } = useTranslation();

	return (
		<>
			<h1>
				{t('secondaryDetail.title', 'Detail page with id: {{id}}', {
					id,
				})}
			</h1>
			<ul>
				<li>
					<Link to="/secondary">{t('nav.back', 'Back')}</Link>
				</li>
			</ul>
		</>
	);
};

export default SecondaryDetailPage;
