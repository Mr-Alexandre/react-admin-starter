import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { IExampleTodoItemProps } from '@domain/example-todo/components/example-todo-item/interface';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ExampleTodoItem: FC<IExampleTodoItemProps> = ({
	data,
	handleRemoveClick,
	handleCheckboxChange,
}) => {
	const { t } = useTranslation();
	return (
		<li className={styles.exampleTodoItem} role="presentation">
			<input
				className={styles.exampleTodoItem__checkbox}
				type="checkbox"
				checked={data.completed}
				onChange={(event) => handleCheckboxChange?.(event, data)}
			/>
			<p className={styles.exampleTodoItem__text}>{data.text}</p>
			<button
				className={styles.exampleTodoItem__removeBtn}
				onClick={(event) => handleRemoveClick?.(event, data)}
			>
				{t('exampleTodo:item.remove', 'Remove')}
			</button>
			<Link to={`/todo/${data.id}`}>
				<a className={styles.exampleTodoItem__link}>
					{t('exampleTodo:item.view', 'View')}
				</a>
			</Link>
		</li>
	);
};

export default observer(ExampleTodoItem);
