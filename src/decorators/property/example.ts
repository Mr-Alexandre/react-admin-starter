function ExamplePropertyDecorator(target: any, propertyKey: string) {
	Object.defineProperty(target, propertyKey, {
		enumerable: true,
		configurable: true
	});
}

function ExamplePropertyDecoratorWithParams(limit: number) {
	return function (target: any, propertyKey: string) {
		let value: string;
		const getter = function () {
			return value;
		};
		const setter = function (newVal: string) {
			if (newVal.length < limit) {
				Object.defineProperty(target, 'errors', {
					value: `Your password should be bigger than ${limit}`
				});
			} else {
				value = newVal;
			}
		};
		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter
		});
	}
}

export {
	ExamplePropertyDecorator,
	ExamplePropertyDecoratorWithParams
}
