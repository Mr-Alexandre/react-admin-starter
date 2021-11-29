import React, { FC } from 'react';
import './header.component.scss';
import Logo from '../../assets/logo.svg';

const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__logo-box">
				<img src={Logo} alt="logo" className="header__logo" />
			</div>
		</header>
	)
}

export default Header;
