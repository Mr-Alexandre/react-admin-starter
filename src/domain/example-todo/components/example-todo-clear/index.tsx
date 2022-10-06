import React, { FC } from 'react';
import { IExampleTodoClearProps } from '@domain/example-todo/components/example-todo-clear/interface';
import { useTranslation } from 'react-i18next';

const ExampleTodoClear: FC<IExampleTodoClearProps> = ({
	handleClick,
	...otherAttrs
}) => {
	const { t } = useTranslation();

	return (
		<button onClick={handleClick} {...otherAttrs}>
			{t('exampleTodo:clearBtn.text', 'Clear list')}
		</button>
	);
};

export default ExampleTodoClear;
