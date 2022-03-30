import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SecondaryPage: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t('secondary.title', 'Secondary page')}</h1>
			<ul>
				<li>
					<Link to="/">{t('nav.backToHome', 'Back to Home')}</Link>
				</li>
				<li>
					<Link to="/secondary/45">{t('global.detail', 'Detail')}</Link>
				</li>
			</ul>
		</>
	);
};

export default SecondaryPage;
