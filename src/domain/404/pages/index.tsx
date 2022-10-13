import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation } from 'react-i18next';
import { Button, Result } from 'antd';

const NotFoundPage: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Result
				status="404"
				title="404"
				subTitle={t('404:title', 'Sorry, the page you visited does not exist.')}
				extra={(
					<Link to="/">
						<Button type="primary">
							{t('404:backHome', 'Back Home')}
						</Button>
					</Link>
				)}
			/>
		</>
	);
};

export default withTranslation(['404'])(NotFoundPage);
