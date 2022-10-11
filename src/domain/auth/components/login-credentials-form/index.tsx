import React, { FC } from 'react';
import styles from './index.module.scss';
import { Button, Checkbox, Form, Input, message, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { ILoginCredentialsFormProps } from '@domain/auth/components/login-credentials-form/interface';
import classnames from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { ILoginByCredentials } from '@domain/auth/interfaces/login-by-credentials';
import { joiResolver } from '@hookform/resolvers/joi';
import loginByCredentialsValidationScheme from '@domain/auth/models/login-by-credentials.validation-scheme';
import { useAuth } from '@domain/auth/context/auth';
import { useLoginByCredentials, useSession } from '@domain/auth/hooks/auth';
import { setServerErrors } from '@utils/form';

const LoginCredentialsForm: FC<ILoginCredentialsFormProps> = ({
	className
}) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const {
		handleSubmit,
		formState: { errors: formErrors },
		setError: formSetError,
		control: formControl,
	} = useForm<ILoginByCredentials>({
		resolver: joiResolver(loginByCredentialsValidationScheme),
	});
	const { login } = useAuth();
	const { isFetching: isFetchingSession, refetch: getSession } = useSession({
		retry: false,
		enabled: false,
		refetchOnWindowFocus: false,
		onSuccess: (data) => {
			login(data);
			navigate('/');
		},
		onError: (error) => {
			console.log(error);
			void message.error(
				t(
					'auth:loginCredentialsForm.toast.loginError.title',
					'Something went wrong'
				)
			);
		},
	});
	const { isLoading: isLoadingLogin, mutate: signIn } = useLoginByCredentials(
		{
			retry: false,
			onSuccess: async () => {
				await getSession();
			},
			onError: (error) => {
				if (error.response?.data?.errors) {
					setServerErrors(error.response.data.errors, formSetError);
				} else {
					console.log(error);
					void message.error(
						t(
							'auth:loginCredentialsForm.toast.loginError.title',
							'Something went wrong'
						)
					);
				}
			},
		}
	);
	const isLoading = isLoadingLogin || isFetchingSession;

	const handleValidFormSubmit = (data: ILoginByCredentials) => {
		signIn(data);
	};

	return (
		<section className={classnames(styles.loginCredentialsForm, className)}>
			<header className={styles.loginCredentialsForm__header}>
				<h3 className={styles.loginCredentialsForm__title}>
					{t('auth:loginCredentialsForm.title', 'Authorization')}
				</h3>
			</header>
			<Form
				className={styles.loginCredentialsForm__form}
				initialValues={{ remember: true }}
				onFinish={handleSubmit(handleValidFormSubmit)}
				size="middle"
			>
				<Form.Item
					name="username"
					validateStatus={formErrors.username ? 'error' : 'success'}
					help={formErrors.username?.message}
				>
					<Controller
						name="username"
						control={formControl}
						render={({ field }) => (
							<Input
								{...field}
								prefix={
									<UserOutlined className="site-form-item-icon" />
								}
								placeholder={t('auth:loginCredentialsForm.username.placeholder', 'Username')}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item
					name="password"
					validateStatus={formErrors.password ? 'error' : 'success'}
					help={formErrors.password?.message}
				>
					<Controller
						name="password"
						control={formControl}
						render={({ field }) => (
							<Input.Password
								{...field}
								prefix={
									<LockOutlined className="site-form-item-icon" />
								}
								placeholder={t('auth:loginCredentialsForm.password.placeholder', 'Password')}
								iconRender={(visible) =>
									visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
								}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>
							{t('auth:loginCredentialsForm.rememberMe.label', 'Remember me')}
						</Checkbox>
					</Form.Item>

					<a>
						{t('auth:loginCredentialsForm.forgotPassword.text', 'Forgot password')}
					</a>
				</Form.Item>

				<footer>
					<Space size={14}>
						<Button
							type="primary"
							htmlType="submit"
							className={styles.singIn__btn}
							loading={isLoading}
						>
							{t('auth:loginCredentialsForm.submitBtn.text', 'Login')}
						</Button>
						<Trans i18nKey="auth:loginCredentialsForm.registerNow.text">
						Or <Link to="/registration">register now!</Link>
						</Trans>
					</Space>
				</footer>
			</Form>
		</section>
	)
}

export default LoginCredentialsForm;
