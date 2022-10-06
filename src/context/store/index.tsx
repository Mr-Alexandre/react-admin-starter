import {
	IStore,
	IStoreContext,
	IStoreProviderProps,
	IStoreState,
} from '@context/store/interface';
import React, {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useMemo,
} from 'react';
import { applySnapshot, types } from 'mobx-state-tree';
import ExampleStore from '@stores/example/example.store';
import ThemeStore from '@stores/theme/theme.store';
import { EThemes } from '@stores/theme/interface';

let store: IStore | undefined;

const Store = types.model({
	themeStore: types.optional(ThemeStore, {
		value: EThemes.LIGHT,
	}),
	exampleStore: types.optional(ExampleStore, {
		value: '',
		isMenuOpened: true,
	}),
});

const StoreContext = createContext<IStoreContext | undefined>(undefined);

const useStore = () => {
	const context = useContext(StoreContext);
	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider');
	}

	return context;
};

const StoreProvider: FC<PropsWithChildren<IStoreProviderProps>> = ({
	children,
	initialState,
}) => {
	const state = useMemo(() => initializeStore(initialState), [initialState]);

	return (
		<StoreContext.Provider value={state}>{children}</StoreContext.Provider>
	);
};

function initializeStore(snapshot?: IStoreState): IStoreContext {
	const _store = store ?? Store.create();

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
	if (snapshot) {
		applySnapshot(_store, snapshot);
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return store;
}

export { Store, StoreProvider, useStore, StoreContext, initializeStore };
