import React, { ChangeEvent, FC, MouseEvent, useCallback, useEffect, useMemo } from 'react';
import ExampleTodoInput from '@domain/example-todo/components/example-todo-input';
import ExampleTodoList from '@domain/example-todo/components/example-todo-list';
import ExampleTodoClear from '@domain/example-todo/components/example-todo-clear';
import { ExampleTodoContext } from '@domain/example-todo/context/example-todo';
import { IExampleTodoProps } from '@domain/example-todo/components/example-todo/interface';
import { IExampleTodoChangeData, IExampleTodoModel } from '@domain/example-todo/interfaces/todo';
import todoApiService from '@domain/example-todo/services/todo';
import { useQueryClient } from '@tanstack/react-query';
import TodoListModel from '@domain/example-todo/models/todo-list.model';
import { applySnapshot } from 'mobx-state-tree';
import { useCreateTodo, useDeleteAllTodo, useDeleteTodo, useUpdateTodo } from '@domain/example-todo/hooks/todo';

const ExampleTodo: FC<IExampleTodoProps> = ({ todos }) => {
	const queryClient = useQueryClient();

	const todoStore = useMemo(() => {
		return TodoListModel.create({
			items: todos || [],
		});
	}, [todos]);

	useEffect(() => {
		applySnapshot(todoStore, {
			items: todos || [],
		});
	}, [todoStore, todos]);

	const { mutate: createTodo } = useCreateTodo({
		onSuccess: async () => {
			await queryClient.invalidateQueries([todoApiService.GET_ALL_REQUEST_KEY]);
		},
		onSettled: () => {
			// queryClient.invalidateQueries(['todos'])
		},
	});

	const { mutate: updateTodo } = useUpdateTodo({
		onSuccess: async () => {
			await queryClient.invalidateQueries([todoApiService.GET_ALL_REQUEST_KEY]);
		},
		onSettled: () => {
			// queryClient.invalidateQueries(['todos'])
		},
	});

	const { mutate: deleteTodo } = useDeleteTodo({
		onSuccess: async () => {
			await queryClient.invalidateQueries([todoApiService.GET_ALL_REQUEST_KEY]);
		},
		onSettled: () => {
			// queryClient.invalidateQueries(['todos'])
		},
	});

	const { mutate: deleteAllTodo } = useDeleteAllTodo({
		onSuccess: async () => {
			await queryClient.invalidateQueries([todoApiService.GET_ALL_REQUEST_KEY]);
		},
		onSettled: () => {
			// queryClient.invalidateQueries(['todos'])
		},
	});

	const handleRemoveClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>, item: IExampleTodoModel) => {
			event.preventDefault();
			deleteTodo(item.id);
		},
		[deleteTodo]
	);

	const handleCheckboxChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>, item: IExampleTodoModel) => {
			const data: IExampleTodoChangeData = {
				id: item.id,
				completed: !item.completed,
			};
			updateTodo(data);
		},
		[updateTodo]
	);

	const handleInputEnter = useCallback((value: string) => {
		createTodo({
			text: value,
			completed: false,
		});
	}, [createTodo]);

	const handleClickRemoveAll = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			deleteAllTodo();
		},
		[deleteAllTodo]
	);

	return (
		<>
			<ExampleTodoContext.Provider value={todoStore}>
				<ExampleTodoInput handleInputEnter={handleInputEnter} />
				<ExampleTodoList
					handleRemoveClick={handleRemoveClick}
					handleCheckboxChange={handleCheckboxChange}
				/>
				<ExampleTodoClear handleClick={handleClickRemoveAll} />
			</ExampleTodoContext.Provider>
		</>
	);
};

export default ExampleTodo;
