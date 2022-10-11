import { Instance, SnapshotOut } from 'mobx-state-tree';
import LoginByCredentialsModel from '@domain/auth/models/login-by-credentials.model';

export interface ILoginByCredentials
	extends SnapshotOut<typeof LoginByCredentialsModel> {}

export interface ILoginByCredentialsModel
	extends Instance<typeof LoginByCredentialsModel> {}

export type TUserCreateResponse = ILoginByCredentials;
