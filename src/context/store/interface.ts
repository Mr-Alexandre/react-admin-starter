import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import { Store } from '@context/store/index';

export interface IStore extends Instance<typeof Store> {}

export interface IStoreState extends SnapshotIn<typeof Store> {}

export interface IStoreSnapshotOut extends SnapshotOut<typeof Store> {}

export interface IStoreContext extends IStore {}

export interface IStoreProviderProps {
	initialState?: IStoreState;
}
