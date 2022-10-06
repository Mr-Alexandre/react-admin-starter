import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';

const NotFoundPage: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<p>
				{t('404:title', 'Page not fount')}
			</p>
			<Link to="login">
				{t('404:login', 'Login')}
			</Link>
			<Link to="registration">
				{t('404:registration', 'Registration')}
			</Link>
		</>
	);
};

export default withTranslation(['404'])(NotFoundPage);
