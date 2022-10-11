import React, { FC } from 'react';
import styles from './index.module.scss';
import { withTranslation } from 'react-i18next';
import RegistrationCredentialsForm from '@domain/auth/components/registration-credentials-form';

const registrationCredentialsForm: FC = () => {
	return (
		<div className={styles.registrationPage}>
			<div className={styles.registrationPage__container}>
				<RegistrationCredentialsForm />
			</div>
		</div>
	);
};

export default withTranslation(['registration'])(registrationCredentialsForm);
