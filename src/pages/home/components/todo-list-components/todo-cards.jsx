import React from 'react';
import FlipMove from 'react-flip-move';
import { Col, Button, Row } from 'antd';
import { DeleteOutlined, CheckSquareOutlined } from '@ant-design/icons';
import moment from 'moment';

import { GlobalConstants } from '@constants/global-constants';
import { constructTime } from '@utils/utilities';

const TodoCards = ({ todoList, time, handleDelete, updateTodo }) => {
	const renderRows = () => {
		return todoList.map((todo, i) => {
			const timingValue = constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time);
			const isExceeded = constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time, 'isExceeded');
			const isUnderOneHour = constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time, 'isUnderOneHour');
			const isCompleted = todo.status === GlobalConstants.COMPLETED;
			console.log('isUnderOneHour', todo.title, isUnderOneHour);
			return (
				<Col key={i} xl={8} className={`card_style`}>
					<Row className={`card_box ${isUnderOneHour ? `underOneHour` : ``} ${isExceeded ? `exceeded` : ``}`}>
						<Col xl={18}>
							<Col xl={24} className="title_area">
								<span className={`title ${isCompleted ? `completed` : ``}`}>{todo.title}</span>
								<span className="description">
									({isCompleted ? `Task Completed` : isExceeded ? `Due time exceeded` : `Due in ${timingValue}`})
								</span>
							</Col>
							<Col xl={24}>
								<div className="message">{todo.message}</div>
							</Col>
						</Col>
						<Col xl={6} className="card_right">
							{!isCompleted && <Button onClick={() => updateTodo(todo.id)} icon={<CheckSquareOutlined />} size={'middle'} />}
							<Button onClick={() => handleDelete(todo.id)} type="primary" icon={<DeleteOutlined />} size={'middle'} />
						</Col>
					</Row>
				</Col>
			);
		});
	};
	return (
		<Row>
			<Col xl={24}>
				<FlipMove enterAnimation="elevator" leaveAnimation="none" style={{ display: 'flex', flexWrap: 'wrap' }}>
					{renderRows()}
				</FlipMove>
			</Col>
		</Row>
	);
};

export default TodoCards;
