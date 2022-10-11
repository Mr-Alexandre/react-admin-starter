import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import { Button, Form, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { sleep } from '@utils/async';
import classnames from 'classnames';
import { IRegistrationCredentialsFormProps } from '@domain/auth/components/registration-credentials-form/interface';

const RegistrationCredentialsForm: FC<IRegistrationCredentialsFormProps> = ({
	className
}) => {
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { t } = useTranslation();

	const onFinish = async () => {
		setLoading(true);
		await sleep(2000);
		navigate('/');
	};

	return (
		<div className={classnames(className, styles.registrationCredentialsForm)}>
			<header className={styles.registrationCredentialsForm__header}>
				<h3 className={styles.registrationCredentialsForm__title}>
					{t('auth:registrationCredentialsForm.form.title', 'Registration')}
				</h3>
			</header>
			<Form
				className={styles.registrationCredentialsForm__form}
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<Form.Item name="email">
					<Input
						prefix={
							<MailOutlined className="site-form-item-icon" />
						}
						placeholder={t('auth:registrationCredentialsForm.form.email.placeholder', 'Email')}
					/>
				</Form.Item>
				<Form.Item name="password">
					<Input.Password
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						placeholder={t('auth:registrationCredentialsForm.form.password.placeholder', 'Password')}
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
					/>
				</Form.Item>
				<Form.Item name="retry-password">
					<Input.Password
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						placeholder={t('auth:registrationCredentialsForm.form.retryPassword.placeholder', 'Retry Password')}
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
					/>
				</Form.Item>

				<footer>
					<Space size={14}>
						<Button
							type="primary"
							htmlType="submit"
							className={styles.singUp__btn}
							loading={isLoading}
						>
							{t('auth:registrationCredentialsForm.form.submitBtn.text', 'Registration')}
						</Button>
						<Trans i18nKey="auth:registrationCredentialsForm.form.login.text">
						Or <Link to="/sign-in">login!</Link>
						</Trans>
					</Space>
				</footer>
			</Form>
		</div>
	)
}

export default RegistrationCredentialsForm;
