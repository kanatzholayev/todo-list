export interface Todo {
	uuid: string;
	name: string;
	completed: boolean;
}

export interface State {
	todoList: Todo[];
}

export enum ActionTypes {
	AddTodo = 'ADD_TODO',
	ToggleTodo = 'TOGGLE_TODO',
	DeleteTodo = 'DELETE_TODO',
	ClearCompleted = 'CLEAR_COMPLETED',
}

interface AddTodo {
	type: ActionTypes.AddTodo;
	payload: Todo;
}

interface ToggleTodo {
	type: ActionTypes.ToggleTodo;
	payload: {
		uuid: string;
		completed: boolean;
	};
}

interface DeleteTodo {
	type: ActionTypes.DeleteTodo;
	payload: string;
}

interface ClearCompleted {
	type: ActionTypes.ClearCompleted;
}

export type Action = AddTodo | ToggleTodo | DeleteTodo | ClearCompleted;

export type Filter = 'all' | 'active' | 'completed';
