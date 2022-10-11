import React, { FC } from 'react';
import { withTranslation } from 'react-i18next';
import LoginCredentialsForm from '@domain/auth/components/login-credentials-form';
import styles from './index.module.scss';

const LoginPage: FC = () => {
	return (
		<div className={styles.loginPage}>
			<div className={styles.loginPage__container}>
				<LoginCredentialsForm />
			</div>
		</div>
	);
};

export default withTranslation(['login'])(LoginPage);
