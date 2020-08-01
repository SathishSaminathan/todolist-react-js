import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import { Col, Button, Row, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { GlobalConstants } from '@constants/global-constants';

const TodoCards = ({ todoList, time, handleDelete }) => {
	const constructTime = (now, then) => {
		var ms = moment(now, GlobalConstants.momentFormat).diff(moment(then, GlobalConstants.momentFormat));
		var d = moment.duration(ms);
		return `${d.days()}d ${parseInt(d.asHours())}h ${d.minutes()}m ${d.seconds()}s`;
	};

	const renderRows = () => {
		return todoList.map((todo, i) => (
			<Col key={i} xl={24} className="card_style">
				<Row>
					<Col xl={18}>
						<Col xl={24} className="title_area">
							<span className="title">{todo.title}</span>
							<span className="description">Due in {constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time)}</span>
						</Col>
						<Col xl={24}>
							<div className="message">{todo.message}</div>
						</Col>
					</Col>
					<Col xl={6} className="card_right">
						<Checkbox></Checkbox>
						<Button onClick={() => handleDelete(todo.id)} type="primary" icon={<DeleteOutlined />} size={'middle'} />
					</Col>
				</Row>
			</Col>
		));
	};
	return (
		<>
			<FlipMove enterAnimation="accordionVertical" leaveAnimation="none">
				{renderRows()}
			</FlipMove>
		</>
	);
};

export default TodoCards;
