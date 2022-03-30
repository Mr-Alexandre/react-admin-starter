import renderer from 'react-test-renderer';
import React from 'react';
import ErrorBoundary from './index';
import { IErrorBoundaryProps } from './interface';

describe('ErrorBoundary component', () => {
	it('Renders correctly', () => {
		const props: IErrorBoundaryProps = {}
		const tree = renderer
			.create(
				<ErrorBoundary {...props}>
					content
				</ErrorBoundary>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	// it('Shows the fallback when children an error', () => {
	//   const Throws = () => {
	//     throw new Error('Simulate error');
	//   };
	//   const Fallback = () => (
	//     <h1>Fallback component</h1>
	//   );
	//   const props: IErrorBoundaryProps = {
	//     fallback: Fallback
	//   }
	//   const instance = renderer
	//     .create(
	//       <ErrorBoundary {...props}>
	//         <Throws/>
	//       </ErrorBoundary>
	//     ).root;
	//   expect(instance.findByType(Fallback));
	// });

});
