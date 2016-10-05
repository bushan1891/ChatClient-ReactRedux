import { take, call, select, fork, put } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { POST_TABLE , POST_TABLE_SUCCESSFUL , FETCH_TABLES} from './types';
import request from '../../utils/request'
import {selectGlobal} from '../../selectors';
export const getConfig = (state) => state.config

export function* Post(action) {
		console.log('Saga caught test' ,action);
		const config = yield select(getConfig);
		const api = config.serverUrl;
		const requestUrl = `${api}table`
		const jwt = localStorage.getItem('token');
		const requestOptions = {
			method:'post',
			headers:{
				'Authorization' : `${jwt}`
			},
			body:JSON.stringify(action.payload)
		}
		console.log(requestOptions);


	// push new table to backend
		const res = yield call(request, requestUrl, requestOptions);
		console.log(res);
	// call post successfull 


	// fetch all tables from backend 
}

export function* PostTableWatcher() {
  while(true) {
    const action = yield take('POST_TABLE');
    yield call(Post,action);
  }
}

export function* postTable() {
  yield fork(PostTableWatcher);
  //yield fork(postCommentWatcher);
}


export default [
  postTable,
];