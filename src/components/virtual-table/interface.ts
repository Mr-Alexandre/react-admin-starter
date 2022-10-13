import { TableProps } from 'antd/lib/table/Table';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IVirtualTableDataSource extends Record<string, any> {
	key: string | number
}

export interface IVirtualTableProps<TData extends IVirtualTableDataSource> extends TableProps<TData> {

}
