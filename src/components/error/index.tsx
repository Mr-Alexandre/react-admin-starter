import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Error: FC = () => {
	const { t } = useTranslation();

	return (
		<div data-testid="error">
			{t('common:components.error.text', 'Component loading error')}
			<span role="img" aria-label="sadness">
				😔
			</span>
		</div>
	);
};

export default Error;
