import React from 'react';
import { Row, Col, Select } from 'antd';

import TodoCards from './todo-cards';
import { GlobalConstants } from '@constants/global-constants';

const { Option } = Select;

const TodoListPresentational = ({ todoList, handleChange, filter: { type, status } }) => {
	return (
		<Col xl={12} className="list_area">
			<Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Task Status
					</Col>
					<Col className="input_style">
						<Select onChange={(value) => handleChange('status', value)} value={status} style={{ width: 120 }}>
							<Option value={GlobalConstants.ALL}>All</Option>
							<Option value={GlobalConstants.ACTIVE}>Active</Option>
							<Option value={GlobalConstants.COMPLETED}>Completed</Option>
						</Select>
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Type
					</Col>
					<Col className="input_style">
						<Select onChange={(value) => handleChange('type', value)} value={type} style={{ width: 120 }}>
							<Option value={GlobalConstants.ALL}>All</Option>
							<Option value={GlobalConstants.SUCCESS}>Success</Option>
							<Option value={GlobalConstants.ERROR}>Error</Option>
							<Option value={GlobalConstants.WARNING}>Warning</Option>
							<Option value={GlobalConstants.CRITICAL}>Critical</Option>
						</Select>
					</Col>
				</Row>
			</Row>
			<TodoCards todoList={todoList} />
		</Col>
	);
};

export default TodoListPresentational;
