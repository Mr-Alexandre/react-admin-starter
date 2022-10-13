import React, { FC, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'rc-resize-observer';
import { IVirtualTableProps } from '@components/virtual-table/interface';
import { Table } from 'antd';
import classNames from 'classnames';
import { VariableSizeGrid } from 'react-window';
import { CustomizeScrollBody } from 'rc-table/lib/interface';
import styles from './index.module.scss';

const VirtualTable: FC<IVirtualTableProps<any>> = (props) => {
	const { columns, scroll } = props;
	const [tableWidth, setTableWidth] = useState(0);
	const gridRef = useRef<VariableSizeGrid>(null);
	const widthColumnCount = columns?.filter(({ width }) => !width)?.length || 0;
	const mergedColumns = columns?.map(column => {
		if (column.width) {
			return column;
		}

		return {
			...column,
			width: Math.floor(tableWidth / widthColumnCount),
		};
	}) || [];
	const [connectObject] = useState<{ scrollLeft: number; }>(() => {
		return new (class {
			get scrollLeft() {
				if (gridRef.current) {
					//eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					return gridRef.current?.state?.scrollLeft;
				}
				//eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				return null;
			}

			set scrollLeft(scrollLeft: number) {
				if (gridRef.current) {
					gridRef.current.scrollTo({ scrollLeft });
				}
			}
		});
	});

	const resetVirtualGrid = () => {
		gridRef.current?.resetAfterIndices({
			columnIndex: 0,
			rowIndex: 0,
			shouldForceUpdate: true,
		});
	};

	useEffect(() => resetVirtualGrid, [tableWidth]);

	const renderVirtualList: CustomizeScrollBody<object> = (rawData, {
		scrollbarSize,
		ref,
		onScroll
	}) => {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		ref.current = connectObject;
		const totalHeight = rawData.length * 54;

		return (
			<VariableSizeGrid
				ref={gridRef}
				className="virtual-table__grid"
				columnCount={mergedColumns.length}
				columnWidth={(index: number) => {
					const { width } = mergedColumns[index];
					//eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					return totalHeight > scroll!.y! && index === mergedColumns.length - 1
						? (width as number) - scrollbarSize - 1
						: (width as number);
				}}
				//eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				height={scroll!.y as number}
				rowCount={rawData.length}
				rowHeight={() => 54}
				width={tableWidth}
				onScroll={({ scrollLeft }: { scrollLeft: number }) => {
					onScroll({ scrollLeft });
				}}
			>
				{({
					columnIndex,
					rowIndex,
					style,
				}: {
					columnIndex: number;
					rowIndex: number;
					style: React.CSSProperties;
				}) => (
					<div
						className={classNames(styles.virtualTable__cell, {
							[styles.virtualTable__cell_last]: columnIndex === mergedColumns.length - 1,
						})}
						style={style}
					>
						{/* eslint-disable @typescript-eslint/no-unsafe-member-access */}
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
						{/* @ts-ignore*/}
						{mergedColumns[columnIndex]?.render?.(rawData[rowIndex][mergedColumns[columnIndex]?.dataIndex]) || rawData[rowIndex][mergedColumns[columnIndex]?.dataIndex]}
					</div>
				)}
			</VariableSizeGrid>
		);
	};

	return (
		<ResizeObserver
			onResize={({ width }) => {
				setTableWidth(width);
			}}
		>
			<Table
				{...props}
				className="virtual-table"
				columns={mergedColumns}
				pagination={false}
				components={{
					body: renderVirtualList,
				}}
			/>
		</ResizeObserver>
	);
};

export default VirtualTable;
