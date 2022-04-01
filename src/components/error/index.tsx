import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Error: FC = () => {
	const { t } = useTranslation();

	return (
		<div>
			{t('errors.messages.componentLoading', 'Component loading error')}
			<span role="img" aria-label="sadness">
				😔
			</span>
		</div>
	);
};

export default Error;
