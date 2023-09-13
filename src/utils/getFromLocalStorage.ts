import { initState } from './consts';
import { State } from './contracts';

export const getFromLocalStorage = (): State => {
	const state = JSON.parse(localStorage.getItem('state') ?? JSON.stringify(initState));
	return state;
};
