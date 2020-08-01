import React, { useState, useEffect } from 'react';

import TodoListPresentational from './todo-list-presentaional';
import { GlobalConstants } from '@constants/global-constants';

const TodoListFunctional = ({ todoList }) => {
	const [localTodolist, setlocalTodolist] = useState([]);
	const [filter, setfilter] = useState({
		type: GlobalConstants.ALL,
		status: GlobalConstants.ALL,
	});

	const generateTodoList = (todoList) => {
		let tempArr = todoList.filter((todo) => todo.status && todo.type);
		setlocalTodolist(tempArr);
	};

	useEffect(() => {
		generateTodoList(todoList);
	}, [todoList]);

	const handleChange = (label, value) => {
		let temp = {
			...filter,
			[label]: value,
		};
		setfilter(temp);
	};

	return <TodoListPresentational filter={filter} handleChange={handleChange} todoList={localTodolist} />;
};

export default TodoListFunctional;
