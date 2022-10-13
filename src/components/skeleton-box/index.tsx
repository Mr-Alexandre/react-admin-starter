import React, { FC } from 'react';
import { ISkeletonBoxProps } from '@components/skeleton-box/interface';
import classnames from 'classnames';

const getProperty = (value?: string | number): string | undefined => {
	if (!value) {
		return undefined;
	}
	if (typeof value == 'string') {
		return value
	}
	return `${value}px`;
}

const SkeletonBox: FC<ISkeletonBoxProps> = ({
	active,
	width,
	height,
	round
}) => {
	const style = {
		width: getProperty(width),
		height: getProperty(height),
		borderRadius: getProperty(round),
		display: 'inline-block',
		background: 'rgba(190,190,190,.2)',
	}
	return (
		<div
			className={classnames('ant-skeleton ant-skeleton-element', {
				'ant-skeleton-active': active
			})}
		>
			<span style={style} />
		</div>
	);
};

export default SkeletonBox;
