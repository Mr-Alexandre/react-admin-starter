import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import {
	EyeInvisibleOutlined,
	EyeTwoTone,
	LockOutlined,
	MailOutlined,
} from '@ant-design/icons';
import { sleep } from '@utils/async';

const SignInPage: FC = () => {
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onFinish = async () => {
		setLoading(true);
		await sleep(2000);
		navigate('/');
	};

	return (
		<div className={styles.singIn}>
			<Form
				className={styles.singIn__form}
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<header className={styles.singIn__header}>
					<h3 className={styles.singIn__title}>Authorization</h3>
				</header>
				<Form.Item name="email">
					<Input
						prefix={
							<MailOutlined className="site-form-item-icon" />
						}
						placeholder="Email"
					/>
				</Form.Item>
				<Form.Item name="password">
					<Input.Password
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						placeholder="Password"
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a>Forgot password</a>
				</Form.Item>

				<footer>
					<Button
						type="primary"
						htmlType="submit"
						className={styles.singIn__btn}
						loading={isLoading}
					>
						Sign in
					</Button>
					Or <Link to="/sign-up">register now!</Link>
				</footer>
			</Form>
		</div>
	);
};

export default SignInPage;
