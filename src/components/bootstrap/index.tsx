import React, { FC } from 'react';
import logo from '@public/images/logo.svg';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './style.scss';

const Bootstrap: FC = () => {
	return (
		<div className="bootstrap">
			<div className="bootstrap__box">
				<img src={logo} alt="logo" className="bootstrap__logo" />
				<Spin
					className="bootstrap__loader"
					indicator={<LoadingOutlined spin />}
				/>
			</div>
		</div>
	);
};

export default Bootstrap;
