import React from 'react';
import { Row, Col, Select } from 'antd';

import TodoAdd from './todo-add';
import TodoCards from './todo-cards';

const { Option } = Select;

const HomePresentational = () => {
	return (
		<Row className="todo_container">
			<Col className="todo_box" xl={16}>
				<Row>
					<Col xl={24} className="header">
						Todo App
					</Col>
					<TodoAdd />
					<Col xl={12} className="list_area">
						<Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<Row className="input_container">
								<Col className="label" xl={24}>
									Task Status
								</Col>
								<Col className="input_style">
									<Select defaultValue="All" style={{ width: 120 }}>
										<Option value="All">All</Option>
										<Option value="Active">Active</Option>
										<Option value="Completed">Completed</Option>
									</Select>
								</Col>
							</Row>
							<Row className="input_container">
								<Col className="label" xl={24}>
									Type
								</Col>
								<Col className="input_style">
									<Select defaultValue="All" style={{ width: 120 }}>
										<Option value="All">All</Option>
										<Option value="Success">Success</Option>
										<Option value="Error">Error</Option>
										<Option value="Warning">Warning</Option>
										<Option value="Critical">Critical</Option>
									</Select>
								</Col>
							</Row>
						</Row>
						<TodoCards />
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default HomePresentational;
