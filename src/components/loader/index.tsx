import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Loader: FC = () => {
	const { t } = useTranslation();

	return (
		<div data-testid="loader">
			{t('loading.messages.componentLoading', 'Component is loading...')}
		</div>
	);
};

export default Loader;
