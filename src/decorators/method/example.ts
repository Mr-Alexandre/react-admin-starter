function ExampleMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalDescriptor: any = descriptor.value;

	descriptor.value = function () {
		console.log(`Invoked ${propertyKey} providing:`, arguments);
		return originalDescriptor.apply(this, arguments);
	};

	return descriptor;
}


function ExampleMethodDecoratorWithParams(value: boolean) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		descriptor.enumerable = value;
	};
}

export {
	ExampleMethodDecorator,
	ExampleMethodDecoratorWithParams
}
