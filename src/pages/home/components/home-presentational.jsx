import React from 'react';
import { Row, Col } from 'antd';

import TodoList from './todo-list-components/todo-list-functional';
import TodoAddFunctional from './todo-add/todo-add-functional';

const HomePresentational = ({ todoList, handleAdd, handleDelete, handleChange, todo, loading, time, updateTodo }) => {
	return (
		<Row className="todo_container">
			<Col className="todo_box" xl={24}>
				<Row>
					<Col xl={24} className="header">
						Todo App
					</Col>
					<TodoAddFunctional loading={loading} handleAdd={handleAdd} handleChange={handleChange} todo={todo} />
					<TodoList time={time} todoList={todoList} handleDelete={handleDelete} updateTodo={updateTodo} />
				</Row>
			</Col>
		</Row>
	);
};

export default HomePresentational;
