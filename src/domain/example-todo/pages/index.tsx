import React, { FC } from 'react';
import ExampleTodo from '@domain/example-todo/components/example-todo';
import styles from './index.module.scss';
import { IExampleTodoPageProps } from '@domain/example-todo/pages/interface';
import { useTodoList } from '@domain/example-todo/hooks/todo';
import { useTranslation } from 'react-i18next';

const ExampleTodoPage: FC<IExampleTodoPageProps> = () => {
	const { t } = useTranslation();
	const { isLoading, isError, isSuccess, data } = useTodoList();

	if (isLoading) {
		return <div>{t('exampleTodo:indexPage.loading', 'Loading...')}</div>;
	}

	if (isError) {
		return <div>{t('exampleTodo:indexPage.error', 'Error')}</div>;
	}

	if (isSuccess) {
		return (
			<div className={styles.exampleTodoPage}>
				<ExampleTodo todos={data} />
			</div>
		);
	}

	return <div>{t('exampleTodo:indexPage.empty', 'Empty')}</div>;
};

export default ExampleTodoPage;
