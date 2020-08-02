import { put, takeEvery } from 'redux-saga/effects';
import Actions from '../action';
import { message } from 'antd';

export function* addTodoWorker(action) {
	yield put(Actions.creators.addTodoCompleted(action.todo));
	message.success('Task Created Successfully!!');
}

export default function* watchIncrement(actions) {
	yield takeEvery(Actions.types.ADD_TODO_LIST, addTodoWorker);
}
