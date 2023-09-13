import { Todo } from './contracts';

export const createTodo = (name: string): Todo => {
	const uuid = crypto.randomUUID();
	return {
		uuid,
		name,
		completed: false,
	};
};
