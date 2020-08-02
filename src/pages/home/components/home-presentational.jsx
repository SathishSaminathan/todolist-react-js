import React from 'react';
import { Row, Col } from 'antd';

import TodoListFunctional from './todo-list-components/todo-list-functional';
import TodoAddFunctional from './todo-add/todo-add-functional';

const HomePresentational = ({ todoList, handleAdd, handleDelete, handleChange, todo, loading, time, updateTodo, visible, handleModalVisible }) => {
	return (
		<Row className="todo_container">
			<Col className="todo_box" xl={24}>
				<Row style={{ height: '100%' }}>
					<TodoAddFunctional
						visible={visible}
						handleModalVisible={handleModalVisible}
						loading={loading}
						handleAdd={handleAdd}
						handleChange={handleChange}
						todo={todo}
					/>
					<TodoListFunctional time={time} todoList={todoList} handleDelete={handleDelete} updateTodo={updateTodo} />
				</Row>
			</Col>
		</Row>
	);
};

export default HomePresentational;
