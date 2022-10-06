import { Instance, SnapshotOut } from 'mobx-state-tree';
import ExampleUserModel from '../models/example-user.model';

export interface IExampleUser extends SnapshotOut<typeof ExampleUserModel> {}

export interface IExampleUserCreateData extends IExampleUser {}

export interface IExampleUserChangeData extends Partial<IExampleUser> {}

export interface IExampleUserModel extends Instance<typeof ExampleUserModel> {}

export type TExampleUserCreateResponse = IExampleUser;
