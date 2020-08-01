import { all } from 'redux-saga/effects';
import todoSaga from './todoSaga';

export default function* rootSaga(action) {
	yield all([todoSaga(action)]);
}
