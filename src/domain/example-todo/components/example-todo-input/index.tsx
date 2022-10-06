import React, { FC, useState } from 'react';
import { IExampleTodoInputProps } from '@domain/example-todo/components/example-todo-input/interface';
import { useTranslation } from 'react-i18next';

const ExampleTodoInput: FC<IExampleTodoInputProps> = ({ handleInputEnter }) => {
	const [inputValue, setInputValue] = useState('');
	const { t } = useTranslation();

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const { value } = event.target;
		setInputValue(value);
	};

	const handleInputKeyPress = (
		event: React.KeyboardEvent<HTMLInputElement>
	): void => {
		const {
			code: keyName,
			currentTarget: { value },
		} = event;
		if (keyName !== 'Enter') {
			return;
		}
		if (!isValidValue(value)) {
			return;
		}
		setInputValue('');
		handleInputEnter?.(value);
	};

	const isValidValue = (value: string): boolean => {
		return Boolean(value.trim());
	};

	return (
		<input
			type="text"
			placeholder={t('exampleTodo:form.name.placeholder', 'Enter name')}
			value={inputValue}
			onChange={handleInputChange}
			onKeyPress={handleInputKeyPress}
		/>
	);
};

export default ExampleTodoInput;
