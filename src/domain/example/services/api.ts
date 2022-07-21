import axios from 'axios';
import { IPost } from '@domain/example/interfaces/post';

const fetchPostList = () => {
	return axios.get<IPost[]>(
		'https://jsonplaceholder.typicode.com/posts'
	).then((res) => res.data);
};

export {
	fetchPostList,
};
