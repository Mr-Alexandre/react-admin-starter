import './side-nav.component.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const SideNav: FC = () => {
	const items = [
		{
			href: '/',
			title: 'Home',
		},
		{
			href: '/secondary',
			title: 'Secondary',
		},
		{
			href: '/post',
			title: 'Post',
		}
	]
	return (
		<aside className="side-nav">
			<nav className="side-nav__menu">
				<ul className="side-nav__list">
					{items.map((item) => (
						<li className="side-nav__item" key={item.href}>
							<Link to={item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}

export default SideNav;
