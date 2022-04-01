import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRedirectProps } from '@components/redirect/interface';

const Redirect: FC<IRedirectProps> = ({ to }) => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(to);
	}, []);

	return <></>;
};

export default Redirect;
