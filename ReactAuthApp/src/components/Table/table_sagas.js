import { take, call, select, fork, put } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { POST_TABLE , POST_TABLE_SUCCESSFUL , FETCH_TABLES , FETCH_TABLES_COMPLETE} from './types';
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
		console.log('tables',res);
	// call post successfull 
		

	// fetch all tables from backend 


}

export function* Fetch(action) {
	const config = yield select(getConfig);
	const api = config.serverUrl;
		const requestUrl = `${api}tables`
		const jwt = localStorage.getItem('token');
		const requestOptions = {
			method:'get',
			headers:{
				'Authorization' : `${jwt}`
			}
		}
	// push new table to backend
		const res = yield call(request, requestUrl, requestOptions);
	// make a fetch_table_complete call 

		console.log(res.data);


	    yield put(createAction(FETCH_TABLES_COMPLETE)(res.data));
}

export function* PostTableWatcher() {
  while(true) {
    const action = yield take(POST_TABLE);
    yield call(Post,action);
  }
}

export function* FetchTableWatcher(){
	while(true){
		const action = yield take(FETCH_TABLES);
		yield call(Fetch,action);
	}
}

export function* postTable() {
  yield fork(PostTableWatcher);
  yield fork(FetchTableWatcher);
}


export default [
  postTable,
];