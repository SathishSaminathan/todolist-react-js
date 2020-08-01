import React from 'react';
import FlipMove from 'react-flip-move';
import { Col, Button, Row, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoCards = ({ todoList }) => {
	const renderRows = () => {
		return todoList.map((data, i) => (
			<Col key={i} xl={24} className="card_style">
				<Row>
					<Col xl={18}>
						<Col xl={24} className="title_area">
							<span className="title">Title</span>
							<span className="description">(Due time exceeded)</span>
						</Col>
						<Col xl={24}>
							<span className="message">Message</span>
						</Col>
					</Col>
					<Col xl={6} className="card_right">
						<Checkbox></Checkbox>
						<Button type="primary" icon={<DeleteOutlined />} size={'middle'} />
					</Col>
				</Row>
			</Col>
		));
	};
	return (
		<>
			<FlipMove enterAnimation="elevator" leaveAnimation="elevator">
				{renderRows()}
			</FlipMove>
		</>
	);
};

export default TodoCards;
