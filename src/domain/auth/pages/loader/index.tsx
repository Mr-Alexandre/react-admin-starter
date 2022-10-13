import React, { FC } from 'react';
import styles from './index.module.scss';
import { Skeleton, Space } from 'antd';
import SkeletonBox from '@components/skeleton-box';

const LoaderPage: FC = () => {
	return (
		<div className={styles.loaderPage}>
			<div className={styles.loaderPage__container}>
				<div className={styles.loaderPage__box} >
					<Space
						direction="vertical"
						size={30}
						style={{ display: 'flex' }}
					>
						<Space
							direction="vertical"
							size={15}
							style={{ display: 'flex' }}
						>
							<SkeletonBox width={180} height={20} />
							<Space
								direction="vertical"
								size={20}
								style={{ display: 'flex' }}
							>
								<Skeleton.Input size="default" block={true} />
								<Skeleton.Input size="default" block={true} />
								<SkeletonBox width={200} height={18} />
							</Space>
						</Space>
						<Space
							direction="horizontal"
							size={10}
							style={{ display: 'flex' }}
						>
							<Skeleton.Button size={'default'} shape={'default'} />
							<SkeletonBox width={150} height={18} />
						</Space>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default LoaderPage;
