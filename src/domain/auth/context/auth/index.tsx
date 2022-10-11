import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { EAuthStatuses, IAuthContext, IAuthProviderProps } from '@domain/auth/context/auth/interface';
import { IAuthSession } from '@domain/auth/interfaces/auth';
import { useSession } from '@domain/auth/hooks/auth';
import { useLocation } from 'react-router';

const AuthContext = createContext<IAuthContext>({
	data: undefined,
	login: () => {
	},
	logout: () => {
	},
	status: EAuthStatuses.UNAUTHENTICATED
});

const useAuth = () => useContext(AuthContext);

const getStatusBySession = (
	session: IAuthSession | null | undefined
): EAuthStatuses => {
	if (!session || !session.authorized) {
		return EAuthStatuses.UNAUTHENTICATED;
	}
	return EAuthStatuses.AUTHENTICATED;
};

const AuthProvider: FC<PropsWithChildren<IAuthProviderProps>> = ({
	children,
	initialSession
}) => {
	const location = useLocation();
	const [data, setData] = useState<IAuthSession | undefined | null>(() => {
		return initialSession || null;
	});
	const [status, setStatus] = useState<EAuthStatuses>(() => {
		return getStatusBySession(initialSession);
	});
	const { refetch: getSession } = useSession({
		retry: false,
		enabled: false,
		refetchOnWindowFocus: false
	});

	useEffect(() => {
		if (!initialSession && location.pathname != '/login') {
			setStatus(EAuthStatuses.LOADING);
			getSession()
				.then((response) => {
					setData(response.data);
					setStatus(getStatusBySession(response.data));
				})
				.catch(() => {
					setStatus(EAuthStatuses.UNAUTHENTICATED);
				});
		}
	}, [getSession, initialSession, location]);

	const login = (session: IAuthSession) => {
		setData(session);
	};

	const logout = () => {
		setData(null);
	};

	return (
		<AuthContext.Provider
			value={{
				data,
				status,
				login,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, useAuth };
