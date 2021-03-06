import React from 'react';
import FlipMove from 'react-flip-move';
import { Col, Row, Tag, Popover } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import moment from 'moment';

import { GlobalConstants } from '@constants/global-constants';
import { constructTime } from '@utils/utilities';
import LottieComponent from '@sharedComponent/lottie-component';
import LottieFile from '@assets/lottiefiles';

const TodoCards = ({ todoList, time, handleDelete, updateTodo }) => {
	const renderRows = () => {
		return todoList.map((todo, i) => {
			const timingValue = constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time);
			const isExceeded = constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time, 'isExceeded');
			const isUnderOneHour = constructTime(moment(todo.dueAt).format(GlobalConstants.momentFormat), time, 'isUnderOneHour');
			const isCompleted = todo.status === GlobalConstants.COMPLETED;
			const createdAt = moment(todo.createdAt).fromNow();
			return (
				<Col key={i} xl={6} className={`card_style`}>
					<Row
						className={`card_box ${isUnderOneHour && !isCompleted ? `underOneHour` : ``} ${
							isExceeded && !isCompleted ? `exceeded` : ``
						}`}>
						<Col xl={24}>
							<Col xl={24} className="title_area">
								<Col>
									<Col>
										<span className={`title ${isCompleted ? `completed` : ``}`}>{todo.title}</span>
									</Col>
									<span className="description">
										({isCompleted ? `Task Completed` : isExceeded ? `Due time exceeded` : `Due in ${timingValue}`})
									</span>
								</Col>
								<Popover
									content={
										<div>
											{!isCompleted && (
												<div className="menu_text" onClick={() => updateTodo(todo.id)}>
													Mark as Completed
												</div>
											)}
											<div className="menu_text" onClick={() => handleDelete(todo.id)}>
												Delete
											</div>
										</div>
									}
									trigger="click"
									placement="right">
									<MoreOutlined />
								</Popover>
							</Col>
							<Col xl={24}>
								<div className="message">{todo.message}</div>
							</Col>
							<Col xl={24}>
								<div>{`Created ${createdAt}`}</div>
							</Col>
							<Col>
								<Tag className={todo.type}>{todo.type}</Tag>
							</Col>
						</Col>
					</Row>
				</Col>
			);
		});
	};
	return (
		<Row style={{ height: '100%' }}>
			<Col xl={24} style={{ height: '100%' }}>
				{todoList.length === 0 ? (
					<LottieComponent file={LottieFile.RecordNotFound} />
				) : (
					<FlipMove enterAnimation="elevator" leaveAnimation="none" style={{ display: 'flex', flexWrap: 'wrap' }}>
						{renderRows()}
					</FlipMove>
				)}
			</Col>
		</Row>
	);
};

export default TodoCards;
