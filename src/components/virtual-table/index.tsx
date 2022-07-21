import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'rc-resize-observer';
import { IVirtualTableProps } from '@components/virtual-table/interface';
import { Table } from 'antd';
import classNames from 'classnames';
import { VariableSizeGrid } from 'react-window';
import { CustomizeScrollBody } from 'rc-table/lib/interface';

const VirtualTable: FC<IVirtualTableProps> = (props) => {
	const { columns, scroll } = props;
	const [tableWidth, setTableWidth] = useState(0);
	const gridRef = useRef<VariableSizeGrid<unknown>>();
	const [connectObject] = useState<Ref<{ scrollLeft: number; }>>(() => {
		return new (class {
			get scrollLeft() {
				return 0;
			}

			set scrollLeft(scrollLeft: number) {
				if (gridRef.current) {
					gridRef.current?.scrollTo({ scrollLeft });
				}
			}
		});
	});
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
		// @ts-ignore
		ref.current = connectObject;
		const totalHeight = rawData.length * 54;

		return (
			<VariableSizeGrid
				// @ts-ignore
				ref={gridRef}
				className="virtual-table__grid"
				columnCount={mergedColumns.length}
				columnWidth={(index: number) => {
					const { width } = mergedColumns[index];
					return totalHeight > scroll!.y! && index === mergedColumns.length - 1
						? (width as number) - scrollbarSize - 1
						: (width as number);
				}}
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
						className={classNames('virtual-table__cell', {
							'virtual-table__cell_last': columnIndex === mergedColumns.length - 1,
						})}
						style={style}
					>
						{/*@ts-ignore*/}
						{rawData[rowIndex][mergedColumns[columnIndex]?.dataIndex]}
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
