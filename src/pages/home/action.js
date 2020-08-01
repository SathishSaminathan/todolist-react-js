const ADD_TODO_LIST = 'ADD_TODO_LIST';
const ADD_TODO_LIST_COMPLETED = 'ADD_TODO_LIST_COMPLETED';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';

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
	},
	creators: {
		addTodo,
		addTodoCompleted,
		deleteTodo,
	},
};
