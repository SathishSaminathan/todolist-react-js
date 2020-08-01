import React from 'react';
import { Row, Col } from 'antd';

import TodoAdd from './todo-add';
import TodoList from './todo-list-components/todo-list-functional';

const HomePresentational = ({ todoList, handleAdd, handleDelete, handleChange, todo, loading, time }) => {
	return (
		<Row className="todo_container">
			<Col className="todo_box" xl={16}>
				<Row>
					<Col xl={24} className="header">
						Todo App
					</Col>
					<TodoAdd loading={loading} handleAdd={handleAdd} handleChange={handleChange} todo={todo} />
					<TodoList time={time} todoList={todoList} handleDelete={handleDelete} />
				</Row>
			</Col>
		</Row>
	);
};

export default HomePresentational;
