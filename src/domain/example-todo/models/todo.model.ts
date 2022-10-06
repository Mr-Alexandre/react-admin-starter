import { types } from 'mobx-state-tree';
import { IExampleTodoChangeData } from '@domain/example-todo/interfaces/todo';

const TodoModel = types
	.model('Todo', {
		id: types.identifierNumber,
		text: types.string,
		completed: types.boolean,
	})
	.actions((self) => ({
		update(data: IExampleTodoChangeData) {
			self.text = data.text ?? self.text;
			self.completed = data.completed ?? self.completed;
		},
		setText(value: string) {
			self.text = value;
		},
		setCompleted(status: boolean) {
			self.completed = status;
		},
	}));

export default TodoModel;
