import React, { FC } from 'react';
import { IExampleTodoDetailPageProps } from '@domain/example-todo/pages/detail/interface';
import { toNumber } from '@utils/number';
import { useTodo } from '@domain/example-todo/hooks/todo';
import { useTranslation, withTranslation } from 'react-i18next';
import { useQueryParams } from '@hooks/query-params';

const ExampleTodoDetailPage: FC<IExampleTodoDetailPageProps> = () => {
	const { t } = useTranslation();
	const query = useQueryParams();
	const id = query.get('id');
	const { isLoading, isError, isSuccess, data } = useTodo(toNumber(id));

	if (isLoading) {
		return <div>{t('exampleTodo:detailPage.loading', 'Loading...')}</div>;
	}

	if (isError) {
		return <div>{t('exampleTodo:detailPage.error', 'Error')}</div>;
	}

	if (isSuccess) {
		return (
			<>
				<p>id: {data.id}</p>
				<br />
				<p>
					{t('exampleTodo:detailPage.data.text.label', 'Text')}:{' '}
					{data.text}
				</p>
				<br />
				<p>
					{t(
						'exampleTodo:detailPage.data.completed.label',
						'Completed'
					)}
					:
					{data.completed
						? t(
							'exampleTodo:detailPage.data.completed.true',
							'true'
						)
						: t(
							'exampleTodo:detailPage.data.completed.false',
							'false'
						)}
				</p>
			</>
		);
	}

	return <div>{t('exampleTodo:detailPage.empty', 'Undefined')}</div>;
};

export default withTranslation(['exampleTodo'])(ExampleTodoDetailPage);
