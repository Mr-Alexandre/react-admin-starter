import { useState } from 'react';

const useExample = (initialValue: string) => {
	const [state, setState] = useState(initialValue);

	return [state, setState];
};

export default useExample;
