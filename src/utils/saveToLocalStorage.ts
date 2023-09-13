import { State } from './contracts';

export const saveToLocalStorage = (state: State) => {
	localStorage.setItem('state', JSON.stringify(state));
};
