import { IExampleTodoModel } from '@domain/example-todo/interfaces/todo';
import { ChangeEvent, MouseEvent } from 'react';

export interface IExampleTodoItemProps {
	data: IExampleTodoModel;
	handleRemoveClick?: (
		event: MouseEvent<HTMLButtonElement>,
		item: IExampleTodoModel
	) => void;
	handleCheckboxChange?: (
		event: ChangeEvent<HTMLInputElement>,
		item: IExampleTodoModel
	) => void;
}
