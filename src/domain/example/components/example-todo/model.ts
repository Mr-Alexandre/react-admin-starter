import { action, computed, makeObservable, observable } from 'mobx';

class ExampleTodoModel {
	private _id: number = Math.random();

	@computed
	get id(): number {
		return this._id;
	}

	@observable
	private _title = '';

	@computed
	get title(): string {
		return this._title;
	}

	@observable
	private _list: Array<string> = [];

	@computed
	get list(): Array<string> {
		return this._list;
	}

	constructor() {
		makeObservable(this);
	}

	@action
	public addItemList(item: string): void {
		this._list.push(item);
	}

	@action
	public removeItemList(index: number): void {
		this._list = this.list.filter((item, i) => i !== index);
	}

	@action
	public clearItemList(): void {
		this._list = [];
	}
}

export default ExampleTodoModel;
