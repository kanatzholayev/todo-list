import { Action, ActionTypes } from '../utils/contracts';
import { getFromLocalStorage } from '../utils/getFromLocalStorage';
import { saveToLocalStorage } from '../utils/saveToLocalStorage';

export const reducer = (state = getFromLocalStorage(), action: Action) => {
	switch (action.type) {
		case ActionTypes.AddTodo: {
			const newState = { ...state, todoList: [...state.todoList, action.payload] };

			saveToLocalStorage(newState);

			return newState;
		}
		case ActionTypes.ToggleTodo: {
			const { uuid, completed } = action.payload;

			const todoIndex = state.todoList.findIndex(todo => uuid === todo.uuid);

			const todo = { ...state.todoList[todoIndex] };

			todo.completed = completed;

			const newState = {
				...state,
				todoList: [...state.todoList.slice(0, todoIndex), todo, ...state.todoList.slice(todoIndex + 1)],
			};

			saveToLocalStorage(newState);

			return newState;
		}
		case ActionTypes.DeleteTodo: {
			const uuid = action.payload;

			const newState = {
				...state,
				todoList: state.todoList.filter(todo => todo.uuid !== uuid),
			};

			saveToLocalStorage(newState);

			return newState;
		}
		case ActionTypes.ClearCompleted: {
			const newState = {
				...state,
				todoList: state.todoList.filter(todo => todo.completed),
			};

			saveToLocalStorage(newState);

			return newState;
		}
		default:
			return state;
	}
};
