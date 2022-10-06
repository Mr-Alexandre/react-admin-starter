import TodoModel from '@domain/example-todo/models/todo.model';
import { Instance, SnapshotOut } from 'mobx-state-tree';
import TodoListModel from '@domain/example-todo/models/todo-list.model';

export interface IExampleTodo extends SnapshotOut<typeof TodoModel> {}

export interface IExampleTodoChangeData extends Partial<Omit<IExampleTodo, 'id'>>, Pick<IExampleTodo, 'id'> {}

export interface IExampleTodoCreateData extends Omit<IExampleTodo, 'id'> {}

export type TTodoReadAllResponse = IExampleTodo[];
export type TTodoReadResponse = IExampleTodo;
export type TTodoUpdateResponse = IExampleTodo;
export type TTodoCreateResponse = IExampleTodo;
export type TTodoDeleteResponse = null;
export type TTodoDeleteAllResponse = null;

export interface IExampleTodoListModel extends Instance<typeof TodoListModel> {}

export interface IExampleTodoModel extends Instance<typeof TodoModel> {}
