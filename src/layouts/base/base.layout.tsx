import './base.layout.scss';
import React, { FC } from 'react';
import Header from '@components/header/header.component';
import SideNav from '@components/side-nav/side-nav.component';
import { IBaseLayoutProps } from './base.interface';

const BaseLayout: FC<IBaseLayoutProps> = (
	{
		children,
		header: SelfHeader,
		sideNav: SelfSideNav,
	}
) => {
	return (
		<div className="base-layout">
			<div className="base-layout__header">
				{SelfHeader
					? <SelfHeader />
					: <Header />
				}
			</div>

			<div className="base-layout__container">
				<div className="base-layout__side-nav">
					{SelfSideNav
						? <SelfSideNav />
						: <SideNav />
					}
				</div>

				<main className="base-layout__main">
					<div className="base-layout__content">
						{children}
					</div>
				</main>
			</div>
		</div>
	)
}


export default BaseLayout;
