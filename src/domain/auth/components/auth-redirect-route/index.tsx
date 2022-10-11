import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { IAuthRedirectRouteProps } from '@domain/auth/components/auth-redirect-route/interface';
import { useAuth } from '@domain/auth/context/auth';

const AuthRedirectRoute: FC<PropsWithChildren<IAuthRedirectRouteProps>> = ({
	children,
	redirectUrl
}) => {
	const { data: session } = useAuth();
	if (session?.authorized) {
		return <Navigate to={redirectUrl} />;
	}

	return (
		<>
			{children}
		</>
	);
};

export default AuthRedirectRoute;
