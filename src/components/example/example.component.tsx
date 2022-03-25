import React, { useState } from 'react';
import { TExampleProps as Props } from '@components/example/example.interface';
import '@components/example/example.component.scss';
import { observer } from 'mobx-react';
import ExampleService from '@components/example/example.service';

const Example = observer((props: Props) => {
	const [exampleService] = useState(() => new ExampleService());
	const [inputValue, setInputValue] = useState('');

	const removeItem = (index: number): void => {
		exampleService.removeItemList(index);
	};

	const clearList = (): void => {
		exampleService.clearItemList();
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setInputValue(value);
	};

	const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		const { code: keyName, currentTarget: { value } } = event;
		if (keyName !== 'Enter') {
			return;
		}
		if (!isValidValue(value)) {
			return;
		}
		setInputValue('');
		exampleService.addItemList(value);
	};

	const isValidValue = (value: string): boolean => {
		return Boolean(value.trim());
	};

	return (
		<div className="example">
			<h4>Title: {props.title}</h4>
			<input
				type="text"
				placeholder="Введите название"
				value={inputValue}
				onChange={handleInputChange}
				onKeyPress={handleInputKeyPress}
			/>
			<ul>
				{exampleService.list.map((item, index) => (
					<li
						role="presentation"
						key={index}
						onClick={() => removeItem(index)}
					>
						{item}
					</li>
				))}
			</ul>
			{exampleService.list.length
				? <button onClick={clearList}>Clear list</button>
				: null
			}
		</div>
	);
});


export default Example;
