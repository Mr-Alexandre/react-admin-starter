type ConstructorMixin = { new(...args: any[]): {} };

function ExampleDecorator<T extends ConstructorMixin>(constructor: T) {
	return class extends constructor {
		newProperty = 'new property';
		hello = 'override';
	};
}

function ExampleDecoratorWithParams(param: number) {
	console.log(`Param: ${param}`);
	return function <T extends ConstructorMixin>(constructor: T) {
		return class extends constructor {
			newProperty = 'new property';
			hello = 'override';
		};
	}
}

export {
	ExampleDecorator,
	ExampleDecoratorWithParams
};
