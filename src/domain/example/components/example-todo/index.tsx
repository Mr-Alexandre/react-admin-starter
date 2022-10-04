import React, { useState } from 'react';
import { IExampleProps as Props } from '@domain/example/components/example-todo/interface';
import styles from './index.module.scss';
import { observer } from 'mobx-react';
import ExampleTodoModel from '@domain/example/components/example-todo/model';
import { useTranslation } from 'react-i18next';

const ExampleTodo = observer((props: Props) => {
	const [model] = useState(() => new ExampleTodoModel());
	const [inputValue, setInputValue] = useState('');
	const { t } = useTranslation();

	const removeItem = (index: number): void => {
		model.removeItemList(index);
	};

	const clearList = (): void => {
		model.clearItemList();
	};

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
			currentTarget: { value }
		} = event;
		if (keyName !== 'Enter') {
			return;
		}
		if (!isValidValue(value)) {
			return;
		}
		setInputValue('');
		model.addItemList(value);
	};

	const isValidValue = (value: string): boolean => {
		return Boolean(value.trim());
	};

	return (
		<div className={styles.example}>
			<img
				src='/public/images/logo.svg'
				alt='logo'
				className={styles.example__logo}
			/>
			<h4>Title: {props.title}</h4>
			<input
				type='text'
				placeholder={t('example.form.name.placeholder', 'Enter name')}
				value={inputValue}
				onChange={handleInputChange}
				onKeyPress={handleInputKeyPress}
			/>
			<ul>
				{model.list.map((item, index) => (
					<li
						role='presentation'
						key={index}
						onClick={() => removeItem(index)}
					>
						{item}
					</li>
				))}
			</ul>
			{model.list.length ? (
				<button onClick={clearList}>Clear list</button>
			) : null}
		</div>
	);
});

export default ExampleTodo;
