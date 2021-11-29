import 'reflect-metadata';

const requiredMetadataKey = Symbol('required');

function ExampleParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {
	let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
	existingRequiredParameters.push(parameterIndex);
	Reflect.defineMetadata(
		requiredMetadataKey,
		existingRequiredParameters,
		target,
		propertyKey
	);
}

function ExampleParameterDecoratorWithParams(value: symbol) {
	return function (target: Object, propertyKey: string | symbol, index: number) {

	}
}

export {
	ExampleParameterDecorator,
	ExampleParameterDecoratorWithParams
}
