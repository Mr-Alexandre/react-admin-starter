import { IExampleTodoItemProps } from '@domain/example-todo/components/example-todo-item/interface';

export interface IExampleTodoListProps
	extends Pick<
		IExampleTodoItemProps,
		'handleRemoveClick' | 'handleCheckboxChange'
	> {}
