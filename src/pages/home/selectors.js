import { createSelector } from 'reselect';
import { initState } from './reducer';

const counterState = (state) => state.todo || initState;
const todoList = createSelector(counterState, (cnter) => cnter.todoList);
const loading = createSelector(counterState, (cnter) => cnter.loading);
const time = createSelector(counterState, (cnter) => cnter.time);

export default {
	counterState,
	todoList,
	loading,
	time,
};
