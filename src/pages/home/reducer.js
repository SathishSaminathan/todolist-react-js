import Actions from './action';
import moment from 'moment';
import { GlobalConstants } from '@constants/global-constants';

export const initState = {
	todoList: [],
	loading: false,
	time: moment().format(GlobalConstants.momentFormat),
};

const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case Actions.types.ADD_TODO_LIST: {
			return {
				...state,
				loading: !state.loading,
			};
		}
		case Actions.types.SET_TIME: {
			return {
				...state,
				time: action.time,
			};
		}
		case Actions.types.ADD_TODO_LIST_COMPLETED: {
			return {
				...state,
				loading: !state.loading,
				todoList: [...state.todoList, action.todo],
			};
		}
		case Actions.types.DELETE_TODO_LIST: {
			return {
				...state,
				todoList: state.todoList.filter((todo) => todo.id !== action.todoId),
			};
		}
		default:
			return state;
	}
};

export default todoReducer;
