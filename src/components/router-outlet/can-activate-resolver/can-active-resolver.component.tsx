import React, { FC, useEffect, useState } from 'react';
import { ICanActivateResolverProps } from '@components/router-outlet/can-activate-resolver/can-active-resolver.interface';
import { wrapIntoPromise } from '@utils/promise';
import { empty, from, Subscription, switchMap, takeWhile } from 'rxjs';
import { TCanActivateReturn } from '@route-guard/route-guard.interface';
import { isString } from '@utils/string';
import { isBoolean } from '@utils/boolean';
import { Redirect } from 'react-router-dom';

const CanActivateResolver: FC<ICanActivateResolverProps> = (
	{
		children,
		fallback: Fallback,
		...props
	}
) => {
	const [isLoading, setIsLoading] = useState(props.data.length > 0);
	const [redirectUrl, setRedirectUrl] = useState('');
	let subscription: Subscription | undefined;

	useEffect(() => {
		resolveQueue();
		return () => {
			subscription?.unsubscribe();
		}
	}, []);

	const resolveQueue = function () {
		if (props.data.length) {
			const queue = props.data;
			const first = queue[0];
			let index = 0;
			subscription = from(
				wrapIntoPromise<TCanActivateReturn>(first.canActivate(props.routerProps))
			)
				.pipe(
					takeWhile(result => {
						if (isString(result)) {
							setRedirectUrl(result);
							setIsLoading(false);
							return false;
						}
						return true;
					}),
					takeWhile(result => {
						if (isBoolean(result) && result) {
							return true;
						}
						setRedirectUrl(props.redirectUrl);
						setIsLoading(false);
						return false;
					}),
					switchMap(() => {
						const nextIndex = index + 1;
						index++;
						if (queue.length < nextIndex) {
							return from(
								wrapIntoPromise<TCanActivateReturn>(queue[nextIndex].canActivate(props.routerProps))
							);
						} else {
							return empty();
						}
					})
				)
				.subscribe(() => {
					setIsLoading(false);
				});
		}
	}

	return (
		<>
			{isLoading
				? <Fallback />
				: redirectUrl ? <Redirect to={redirectUrl} /> : children
			}
		</>
	);
}

export default CanActivateResolver;
