import React, { FC } from 'react';
import { IRouterOutletProps } from '@components/router-outlet/router-outlet.interface';
import { Redirect, Route, Switch } from 'react-router-dom';
import CanActivateResolver from '@components/router-outlet/can-activate-resolver/can-active-resolver.component';

const EmptyCanActivateFallback: FC = () => {
	return (
		<>
			<p>Empty canActivateFallback</p>
		</>
	)
}

const RouterOutlet: FC<IRouterOutletProps> = (props) => {

	return (
		<Switch>
			{props.routes
				.map(({ component: Component, ...route }, index) => (
					<Route
						key={index}
						{...route}
						render={(props) => {
							if (route.redirectTo) {
								return <Redirect to={route.redirectTo} />
							}

							if (route.canActivate?.length) {
								return (
									<CanActivateResolver
										routerProps={props}
										data={route.canActivate}
										redirectUrl={'/'}
										fallback={route.canActivateFallback || EmptyCanActivateFallback}
									>
										{Component
											? <Component {...props} />
											: null
										}
									</CanActivateResolver>
								)
							}

							if (Component) {
								return <Component {...props} />;
							}

							return null;
						}}
					/>
				))}
		</Switch>
	);
}

export default RouterOutlet;
