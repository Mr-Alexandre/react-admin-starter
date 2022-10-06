import { Instance, SnapshotOut } from 'mobx-state-tree';
import ExampleStore from '@stores/example/example.store';

export interface IExampleStore extends Instance<typeof ExampleStore> {}

export interface IExampleStoreData extends SnapshotOut<typeof ExampleStore> {}
