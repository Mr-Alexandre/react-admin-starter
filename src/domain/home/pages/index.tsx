import React, { FC } from 'react';
import styles from './index.module.scss';
import { useTranslation, withTranslation } from 'react-i18next';

const HomePage: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1 className={styles.homePage__title}>
				{t('home:title', 'Home Page')}
			</h1>
		</>
	);
};

export default withTranslation(['home'])(HomePage);
