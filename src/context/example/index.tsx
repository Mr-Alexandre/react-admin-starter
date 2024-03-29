import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { IExampleContext } from './interface';

const initialState: IExampleContext = {
	example: true,
	setExample: () => {},
};

const ExampleContext = createContext<IExampleContext>(initialState);

const useExampleContext = () => useContext(ExampleContext);

const ExampleProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [example, setExample] = useState(initialState.example);

	return (
		<ExampleContext.Provider
			value={{
				example,
				setExample,
			}}
		>
			{children}
		</ExampleContext.Provider>
	);
};

export { ExampleProvider, useExampleContext };
