import { IAuthSession } from '@domain/auth/interfaces/auth';

export interface IAuthContext {
	data?: IAuthSession | null;
	status: EAuthStatuses;
	login: (session: IAuthSession) => void;
	logout: () => void;
}

export interface IAuthProviderProps {
	initialSession?: IAuthSession | null;
}

export enum EAuthStatuses {
	LOADING = 'LOADING',
	AUTHENTICATED = 'AUTHENTICATED',
	UNAUTHENTICATED = 'UNAUTHENTICATED',
}
