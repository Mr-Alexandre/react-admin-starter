import { QueryClientConfig } from '@tanstack/query-core';
import { isServer } from '@utils/environment';

const reactQueryConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: isServer() ? 0 : 1 * 60 * 1000, //1мин
			cacheTime: isServer() ? 0 : 1 * 60 * 1000, //1мин
			// refetchOnWindowFocus: false,
		},
	},
};

export default reactQueryConfig;
