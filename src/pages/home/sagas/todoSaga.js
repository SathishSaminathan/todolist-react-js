import { put, takeEvery } from 'redux-saga/effects';
import Actions from '../action';

export function* addTodoWorker(action) {
	yield put(Actions.creators.addTodoCompleted(action.todo));
}

export default function* watchIncrement(actions) {
	yield takeEvery(Actions.types.ADD_TODO_LIST, addTodoWorker);
}
