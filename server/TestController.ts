import {
	Body,
	ContentType,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from 'routing-controllers';
import { ITest } from '@interfaces/test';

@Controller()
export default class TestController {
	private data: ITest[] = [];

	@Get('/test/')
	getAll(): ITest[] {
		return this.data;
	}

	@Get('/test/:id')
	@ContentType('text/plain')
	getOne(@Param('id') id: number): ITest | undefined {
		return this.data.find((item) => item.id === id);
	}

	@Post('/test/')
	@ContentType('text/plain')
	post(@Body() data: ITest): ITest {
		const index = this.data.push(data);
		return this.data[index];
	}

	@Put('/test/:id')
	@ContentType('text/plain')
	put(@Param('id') id: number, @Body() data: ITest): ITest | undefined {
		const item = this.data.find((item) => item.id === id);
		if (item) {
			item.title = data.title;
		}
		return item;
	}

	@Delete('/test/:id')
	@ContentType('text/plain')
	remove(@Param('id') id: number): void {
		const index = this.data.findIndex((item) => item.id === id);
		if (index != -1) {
			this.data.splice(index, 1);
		}
	}
}
