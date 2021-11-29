import React, { FC } from 'react';
import { IAuthLayoutProps } from './auth.interface';

const AuthLayout: FC<IAuthLayoutProps> = (
	{
		children,
		header: SelfHeader
	}
) => {
	return (
		<div className="auth-layout">
			<div className="auth-layout__header">
				{SelfHeader
					? <SelfHeader />
					: null
				}
			</div>

			<main className="auth-layout__content">
				{children}
			</main>
		</div>
	)
}

export default AuthLayout;
