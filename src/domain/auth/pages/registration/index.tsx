import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined } from '@ant-design/icons';
import { sleep } from '@utils/async';
import { Trans, useTranslation, withTranslation } from 'react-i18next';

const RegistrationPage: FC = () => {
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { t } = useTranslation();

	const onFinish = async () => {
		setLoading(true);
		await sleep(2000);
		navigate('/');
	};

	return (
		<div className={styles.singUp}>
			<Form
				className={styles.singUp__form}
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<header className={styles.singUp__header}>
					<h3 className={styles.singUp__title}>
						{t('registration:form.title', 'Registration')}
					</h3>
				</header>
				<Form.Item name="email">
					<Input
						prefix={
							<MailOutlined className="site-form-item-icon" />
						}
						placeholder={t('registration:form.email.placeholder', 'Email')}
					/>
				</Form.Item>
				<Form.Item name="password">
					<Input.Password
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						placeholder={t('registration:form.password.placeholder', 'Password')}
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
						placeholder={t('registration:form.retryPassword.placeholder', 'Retry Password')}
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
					/>
				</Form.Item>

				<footer>
					<Button
						type="primary"
						htmlType="submit"
						className={styles.singUp__btn}
						loading={isLoading}
					>
						{t('registration:form.submitBtn.text', 'Registration')}
					</Button>
					<Trans i18nKey="registration:form.login.text">
						Or <Link to="/sign-in">login!</Link>
					</Trans>
				</footer>
			</Form>
		</div>
	);
};

export default withTranslation(['registration'])(RegistrationPage);
