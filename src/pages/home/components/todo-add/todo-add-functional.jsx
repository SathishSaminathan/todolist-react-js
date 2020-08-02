import React, { useState } from 'react';
import TodoAddPresentational from './todo-add-presentational';

const TodoAddFunctional = ({ loading, handleAdd, handleChange, todo }) => {
	const [visible, setvisible] = useState(false);
	const handleModalVisible = () => {
		setvisible(!visible);
	};
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
