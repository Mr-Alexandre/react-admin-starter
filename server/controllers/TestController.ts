import { Controller, Get } from 'routing-controllers';

@Controller('/test')
export default class TestController {
	@Get('/info')
	get(): string {
		return 'This info example';
	}
}
