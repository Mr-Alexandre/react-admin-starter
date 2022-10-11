import React, { FC, PropsWithChildren } from 'react';
import { useAuth } from '@domain/auth/context/auth';
import { Navigate } from 'react-router';
import { IAuthProtectedRouteProps } from '@domain/auth/components/auth-protected-route/interface';

const AuthProtectedRoute: FC<PropsWithChildren<IAuthProtectedRouteProps>> = ({
	children,
	redirectUrl = '/login'
}) => {
	const { data: session } = useAuth();
	if (!session?.authorized) {
		return <Navigate to={redirectUrl} />;
	}

	return (
		<>
			{children}
		</>
	);
};

export default AuthProtectedRoute;
