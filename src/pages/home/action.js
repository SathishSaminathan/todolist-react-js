const ADD_TODO_LIST = 'ADD_TODO_LIST';
const ADD_TODO_LIST_COMPLETED = 'ADD_TODO_LIST_COMPLETED';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
const SET_TIME = 'SET_TIME';
const UPDATE_TODO = 'UPDATE_TODO';

const addTodo = (todo) => {
	return {
		type: ADD_TODO_LIST,
		todo,
	};
};

const addTodoCompleted = (todo) => {
	return {
		type: ADD_TODO_LIST_COMPLETED,
		todo,
	};
};

const updateTodo = (todoId) => {
	return {
		type: UPDATE_TODO,
		todoId,
	};
};

const setCurrentTime = (time) => {
	return {
		type: SET_TIME,
		time,
	};
};

const deleteTodo = (todoId) => {
	return {
		type: DELETE_TODO_LIST,
		todoId,
	};
};

export default {
	types: {
		ADD_TODO_LIST,
		ADD_TODO_LIST_COMPLETED,
		DELETE_TODO_LIST,
		SET_TIME,
		UPDATE_TODO,
	},
	creators: {
		addTodo,
		addTodoCompleted,
		deleteTodo,
		setCurrentTime,
		updateTodo,
	},
};
