import React, { FC } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const Bootstrap: FC = () => {
	return (
		<div className={styles.bootstrap}>
			<div className={styles.bootstrap__box}>
				<img
					src="/public/images/logo.svg"
					alt="logo"
					className={styles.bootstrap__logo}
				/>
				<Spin
					className={styles.bootstrap__loader}
					indicator={<LoadingOutlined spin />}
				/>
			</div>
		</div>
	);
};

export default Bootstrap;
