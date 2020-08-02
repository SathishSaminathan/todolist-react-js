import React from 'react';
import TodoAddPresentational from './todo-add-presentational';

const TodoAddFunctional = ({ loading, handleAdd, handleChange, todo, visible, handleModalVisible }) => {
	return (
		<TodoAddPresentational
			loading={loading}
			handleModalVisible={handleModalVisible}
			visible={visible}
			handleAdd={handleAdd}
			handleChange={handleChange}
			todo={todo}
		/>
	);
};

export default TodoAddFunctional;
