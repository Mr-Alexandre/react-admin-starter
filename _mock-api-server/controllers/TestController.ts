import * as fs from 'fs';
import * as path from 'path';
import { Body, ContentType, Controller, Delete, Get, Param, Post, Put } from 'routing-controllers';

@Controller()
export default class TestController {
	@Get('/example/')
	getAll(): string {
		return 'This action returns all example';
	}

	@Get('/example-html/')
	@ContentType('text/html')
	async getAllHtml(): Promise<string> {
		let data: string;
		try {
			data = await fs.promises.readFile(
				path.join(__dirname, '../dist/ajax-template/example.html'),
				'utf8'
			);
		} catch (e) {
			data = `failed to get data from file\nDetail: ${e}`;
		}
		return data + Math.random();
	}

	@Get('/example/:id')
	@ContentType('text/plain')
	getOne(@Param('id') id: number): string {
		return 'This action returns user #' + id;
	}

	@Post('/example/')
	@ContentType('text/plain')
	post(@Body() user: any): string {
		return 'Saving user...';
	}

	@Put('/example/:id')
	@ContentType('text/plain')
	put(@Param('id') id: number, @Body() user: any): string {
		return 'Updating a user...';
	}

	@Delete('/example/:id')
	@ContentType('text/plain')
	remove(@Param('id') id: number): string {
		return 'Removing user...';
	}
}
