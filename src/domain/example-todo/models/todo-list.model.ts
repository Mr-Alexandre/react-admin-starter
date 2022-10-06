import { types } from 'mobx-state-tree';
import {
	IExampleTodo,
	IExampleTodoModel,
} from '@domain/example-todo/interfaces/todo';
import TodoModel from '@domain/example-todo/models/todo.model';

const TodoListModel = types
	.model('TodoList', {
		items: types.array(TodoModel),
	})
	.actions((self) => ({
		add(data: IExampleTodo) {
			self.items.push(TodoModel.create(data));
		},
		remove(todo: IExampleTodoModel) {
			self.items.remove(todo);
		},
		clear() {
			self.items.clear();
		},
	}));

export default TodoListModel;
