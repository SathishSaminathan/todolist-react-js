import React, { useState, useEffect } from 'react';

import TodoListPresentational from './todo-list-presentaional';
import { GlobalConstants } from '@constants/global-constants';

const TodoListFunctional = ({ todoList, time, handleDelete, updateTodo }) => {
	const [localTodolist, setlocalTodolist] = useState([]);
	const [filter, setfilter] = useState({
		type: GlobalConstants.ALL,
		status: GlobalConstants.ALL,
	});

	const generateTodoList = (todoList) => {
		const { type, status } = filter;
		let filterFields = [];

		if (type !== GlobalConstants.ALL) filterFields.push({ field: 'type', value: type });
		if (status !== GlobalConstants.ALL) filterFields.push({ field: 'status', value: status });

		setlocalTodolist(todoList);

		let localFilteredValues = todoList;
		for (let index = 0; index < filterFields.length; index++) {
			localFilteredValues = localFilteredValues.filter((todo) => todo[filterFields[index].field] === filterFields[index].value);
		}

		setlocalTodolist(localFilteredValues);
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

	return (
		<TodoListPresentational
			updateTodo={updateTodo}
			time={time}
			filter={filter}
			handleChange={handleChange}
			handleDelete={handleDelete}
			todoList={localTodolist}
		/>
	);
};

export default TodoListFunctional;
