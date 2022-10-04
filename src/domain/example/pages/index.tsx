import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import { useQuery } from 'react-query';
import { IPost } from '@domain/example/interfaces/post';
import { fetchPostList } from '../services/api';
import VirtualTable from '@components/virtual-table';

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
		width: 100,
	},
	{
		title: 'User ID',
		dataIndex: 'userId',
		key: 'userId',
		width: 100,
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
];

const ExamplePage: FC = () => {
	const { t } = useTranslation();
	const { isLoading, error, data } = useQuery<IPost[]>('get-posts', fetchPostList);
	const dataSource = data?.map((post) => {
		return {
			key: post.id,
			id: post.id,
			userId: post.userId,
			title: post.title,
		};
	}) || [];

	const handleRowClick = (event: unknown) => {
		console.log(event);
	};

	return (
		<>
			<header className={styles.examplePage__header}>
				<h2 className={styles.examplePage__headerTitle}>{t('example.pages.index.title', 'Posts')}</h2>

				<div className={styles.examplePage__headerControls}>
					<Button key="1" type="primary">{t('global.filters', 'Filters')}</Button>
				</div>
			</header>

			{!error
				? (
					// <Table
					// 	className={styles.examplePage__table}
					// 	pagination={false}
					// 	dataSource={dataSource}
					// 	columns={columns}
					// 	loading={isLoading}
					// 	scroll={{ y: 400 }}
					// 	onRow={(record, rowIndex) => ({
					// 		onClick: handleRowClick
					// 	})}
					// />
					<VirtualTable
						className={styles.examplePage__table}
						pagination={false}
						dataSource={dataSource}
						columns={columns}
						loading={isLoading}
						scroll={{ y: 400 }}
						onRow={() => ({
							onClick: handleRowClick
						})}
					/>
				) : (
					<Result
						status="error"
						title={t('error.messages.baseResult.title', 'An error has occurred')}
						subTitle={t('error.messages.baseResult.subtitle', 'An unexpected error occurred, please check your internet connection and try again')}
						extra={[
							<Button type="primary" key="console">
								{t('global.retry', 'Retry')}
							</Button>,
						]}
					/>
				)}
		</>
	);
};

export default ExamplePage;
