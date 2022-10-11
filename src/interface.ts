import { IAuthSession } from '@domain/auth/interfaces/auth';

export interface IAppProps {
	pageProps?: IPageProps
}

export interface IPageProps {
	session?: IAuthSession
}
