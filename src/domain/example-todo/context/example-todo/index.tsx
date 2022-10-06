import { createContext, useContext } from 'react';
import { TExampleTodoContext } from '@domain/example-todo/context/example-todo/interface';

const ExampleTodoContext = createContext<TExampleTodoContext | undefined>(
	undefined
);

const useExampleTodo = () => {
	const context = useContext(ExampleTodoContext);
	if (!context) {
		throw new Error(
			'useExampleTodoContext must be used within a ExampleTodoContext.Provider.'
		);
	}
	return context;
};

export { useExampleTodo, ExampleTodoContext };
