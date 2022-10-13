import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { useTranslation, withTranslation } from 'react-i18next';
import styles from './index.module.scss';
import VirtualTable from '@components/virtual-table';
import { usePostList } from '@domain/example/hooks/post';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { IPost } from '@domain/example/interfaces/post';

interface ITableData extends IPost {
	key: number
}

const columns: ColumnsType<ITableData> = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
		width: 100,
		render: (id: string) => (
			<Link to={'/example/' + id}>{id}</Link>
		)
	},
	{
		title: 'User ID',
		dataIndex: 'userId',
		key: 'userId',
		width: 100
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title'
	}
];

const ExamplePage: FC = () => {
	const { t } = useTranslation();
	const { isLoading, error, data } = usePostList();
	const dataSource: ITableData[] = data?.map((post) => {
		return {
			key: post.id,
			...post,
		};
	}) || [];

	const handleRowClick = (event: unknown) => {
		console.log(event);
	};

	return (
		<>
			<header className={styles.examplePage__header}>
				<h2 className={styles.examplePage__headerTitle}>{t('example:indexPage.title', 'Posts')}</h2>

				<div className={styles.examplePage__headerControls}>
					<Button key="1" type="primary">{t('example:indexPage.filters', 'Filters')}</Button>
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
						title={t('common:error.messages.baseResult.title', 'An error has occurred')}
						subTitle={t('common:error.messages.baseResult.subtitle', 'An unexpected error occurred, please check your internet connection and try again')}
						extra={[
							<Button type="primary" key="console">
								{t('common:retry', 'Retry')}
							</Button>
						]}
					/>
				)}
		</>
	);
};

export default withTranslation(['common'])(ExamplePage);
