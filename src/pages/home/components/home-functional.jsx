import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import md5 from 'md5';

import Selectors from '../selectors';
import Actions from '../action';
import HomePresentational from './home-presentational';
import { GlobalConstants } from '@constants/global-constants';
import SpeechRecognition from '@sharedComponent/speech-recognition';

// const dueInitialTime = () => {
// 	var d = new Date();
// 	return d.setMinutes(d.getMinutes() + 1);
// };

const defaultValue = {
	title: '',
	message: '',
	type: GlobalConstants.SUCCESS,
	status: GlobalConstants.ACTIVE,
	dueAt: new Date(),
	timestamp: moment().format('X'),
};

const HomeFunctional = ({ todoList, addTodo, deleteTodo, loading, time, setCurrentTime, updateTodo }) => {
	const [todo, settodo] = useState(defaultValue);
	const [visible, setvisible] = useState(false);

	useEffect(() => {
		setInterval(() => {
			if (todoList.length > 0) setCurrentTime(moment().format(GlobalConstants.momentFormat));
		}, 1000);
	}, [todoList]);

	const handleChange = (label, value) => {
		let temp = {
			...todo,
			[label]: value,
		};
		settodo(temp);
	};

	const handleDelete = (todoId) => {
		deleteTodo(todoId);
	};

	// const openNotification = () => {
	// 	notification.open({
	// 		message: 'Required!!',
	// 		description: 'Please provide valid details to save',
	// 		icon: <SmileOutlined style={{ color: '#108ee9' }} />,
	// 	});
	// };

	const handleAdd = () => {
		const { title, message, dueAt } = todo;
		if (title && message && dueAt) {
			addTodo({ ...todo, id: uuidv4(), photoUrl: `http://gravatar.com/avatar/${md5(`${uuidv4()}@gmail.com`)}?d=identicon` });
			settodo(defaultValue);
			playAudio();
			handleModalVisible(false);
		}
		// else {
		// 	openNotification();
		// }
	};

	const playAudio = () => {
		const audioEl = document.getElementsByClassName('audio-element')[0];
		audioEl.play();
	};

	const handleModalVisible = (value) => {
		setvisible(value);
	};

	return (
		<>
			<SpeechRecognition handleModalVisible={handleModalVisible} handleAdd={handleAdd} />
			<HomePresentational
				visible={visible}
				handleModalVisible={handleModalVisible}
				time={time}
				loading={loading}
				todoList={todoList}
				handleAdd={handleAdd}
				handleChange={handleChange}
				handleDelete={handleDelete}
				updateTodo={updateTodo}
				todo={todo}
			/>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		todoList: Selectors.todoList(state),
		loading: Selectors.loading(state),
		time: Selectors.time(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => dispatch(Actions.creators.addTodo(todo)),
		deleteTodo: (todoId) => dispatch(Actions.creators.deleteTodo(todoId)),
		updateTodo: (todoId) => dispatch(Actions.creators.updateTodo(todoId)),
		setCurrentTime: (time) => dispatch(Actions.creators.setCurrentTime(time)),
	};
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(HomeFunctional);

export default Connected;
