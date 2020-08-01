import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import Selectors from '../selectors';
import Actions from '../action';
import HomePresentational from './home-presentational';
import { GlobalConstants } from '@constants/global-constants';

const defaultValue = {
	title: '',
	message: '',
	type: GlobalConstants.SUCCESS,
	dueAt: new Date(),
	id: uuidv4(),
	timestamp: moment().format('X'),
};

const HomeFunctional = ({ todoList, addTodo, loading }) => {
	const [todo, settodo] = useState(defaultValue);

	const handleChange = (label, value) => {
		let temp = {
			...todo,
			[label]: value,
		};
		settodo(temp);
	};

	console.log('todo', todo);

	const handleAdd = () => {
		addTodo(todo);
		settodo(defaultValue);
	};
	return <HomePresentational loading={loading} todoList={todoList} handleAdd={handleAdd} handleChange={handleChange} todo={todo} />;
};

const mapStateToProps = (state) => {
	return {
		todoList: Selectors.todoList(state),
		loading: Selectors.loading(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => dispatch(Actions.creators.addTodo(todo)),
	};
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(HomeFunctional);

export default Connected;
