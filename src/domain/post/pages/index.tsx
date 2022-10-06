import React, { FC } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

const PostPage: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<p>
				{t('post:title', 'Post page')}
			</p>
		</>
	);
};

export default withTranslation(['post'])(PostPage);
