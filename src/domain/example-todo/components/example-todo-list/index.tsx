import React, { FC } from 'react';
import { IExampleTodoListProps } from '@domain/example-todo/components/example-todo-list/interface';
import styles from '@domain/example-todo/components/example-todo-list/index.module.scss';
import { useExampleTodo } from '@domain/example-todo/context/example-todo';
import { observer } from 'mobx-react';
import ExampleTodoItem from '@domain/example-todo/components/example-todo-item';

const ExampleTodoList: FC<IExampleTodoListProps> = ({
	handleRemoveClick,
	handleCheckboxChange,
}) => {
	const todoListModel = useExampleTodo();

	return (
		<ul className={styles.exampleTodoList}>
			{todoListModel.items.map((item) => (
				<ExampleTodoItem
					key={item.id}
					data={item}
					handleRemoveClick={handleRemoveClick}
					handleCheckboxChange={handleCheckboxChange}
				/>
			))}
		</ul>
	);
};

export default observer(ExampleTodoList);
