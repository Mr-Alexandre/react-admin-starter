import { Body, Controller, Delete, Get, NotFoundError, Param, Patch, Post, Req, Res } from 'routing-controllers';
import { IExampleTodo, IExampleTodoChangeData, IExampleTodoCreateData } from '@domain/example-todo/interfaces/todo';
import { Request, Response } from 'express';

@Controller('/todo')
export default class TodoController {
	private todos: Array<IExampleTodo> = [
		{
			id: -1,
			text: 'Купить яблоки',
			completed: false,
		},
		{
			id: -2,
			text: 'Купить помидоры',
			completed: false,
		},
		{
			id: -3,
			text: 'Помыть машину',
			completed: false,
		},
	];

	@Post()
	create(@Body() data: IExampleTodoCreateData): IExampleTodo {
		const todo = {
			id: Date.now() + Math.random(),
			text: data.text,
			completed: false,
		};
		this.todos.push(todo);
		return todo;
	}

	@Get('/:id')
	get(
		@Req() request: Request,
		@Res() response: Response,
		@Param('id') id: number
	): IExampleTodo | undefined {
		const todo = this.todos.find((item) => item.id == id);

		if (!todo) {
			throw new NotFoundError(`Todo was not found.`);
		}

		return todo;
	}

	@Get()
	getAll(
		@Req() request: Request,
		@Res() response: Response
	): Array<IExampleTodo> {
		return this.todos;
	}

	@Patch('/:id')
	update(@Param('id') id: number, @Body() data: IExampleTodoChangeData) {
		let todo = this.todos.find((item) => item.id == id);
		if (!todo) {
			throw new NotFoundError(`Todo was not found.`);
		}
		todo.completed = data.completed ?? todo.completed;
		todo.text = data.text ?? todo.text;
		return todo;
	}

	@Delete('/:id')
	delete(@Param('id') id: number) {
		let todoIndex = this.todos.findIndex((item) => item.id == id);
		if (todoIndex == -1) {
			throw new NotFoundError(`Todo was not found.`);
		}
		this.todos.splice(todoIndex, 1);
		return null;
	}

	@Delete('/')
	deleteAll() {
		this.todos = [];
		return null;
	}
}
