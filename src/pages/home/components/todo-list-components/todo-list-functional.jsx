import React from 'react';

import TodoListPresentational from './todo-list-presentaional';

const TodoListFunctional = ({ todoList }) => {
	return <TodoListPresentational todoList={todoList} />;
};

export default TodoListFunctional;
