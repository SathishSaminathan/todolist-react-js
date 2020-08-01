import React, { useState, useEffect } from 'react';

import TodoListPresentational from './todo-list-presentaional';
import { GlobalConstants } from '@constants/global-constants';

const TodoListFunctional = ({ todoList, time, handleDelete }) => {
	const [localTodolist, setlocalTodolist] = useState([]);
	const [filter, setfilter] = useState({
		type: GlobalConstants.ALL,
		status: GlobalConstants.ALL,
	});

	const generateTodoList = (todoList) => {
		const { type, status } = filter;
		let tempArr = [];
		if (type === GlobalConstants.ALL) {
			setlocalTodolist(todoList);
		} else {
			tempArr = todoList.filter((todo) => todo.type === type);
			setlocalTodolist(tempArr);
		}
	};

	useEffect(() => {
		generateTodoList(todoList);
	}, [todoList, filter]);

	const handleChange = (label, value) => {
		let temp = {
			...filter,
			[label]: value,
		};
		setfilter(temp);
	};

	return <TodoListPresentational time={time} filter={filter} handleChange={handleChange} handleDelete={handleDelete} todoList={localTodolist} />;
};

export default TodoListFunctional;
