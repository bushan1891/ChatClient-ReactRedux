import { take, call, select, fork, put } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { CREATEWBS } from './types';
import request from '../../utils/request';
import {selectGlobal} from '../../selectors';

export const getCart = (state) =>state.cart;
export const getConfig = (state) => state.config;

export function* createWBS(action) {
	console.log('action payload' , action);
		const config = yield select(getConfig);
		const api = config.serverUrl;
		const requestUrl = `${api}excel`
		const jwt = localStorage.getItem('token');
		const requestOptions = {
			method:'post',
			headers:{
				'Authorization' : `${jwt}`
			},
			body:JSON.stringify(action.payload)
		}
		console.log(JSON.stringify(action.payload));
	    yield call(request, requestUrl, requestOptions);
}


export function* cartWatcher(){
	while(true){
		const action = yield take(CREATEWBS);
		yield call(createWBS,action);
	}
}

export function* cartExport(){
  yield fork(cartWatcher);
}

export default [
 cartExport,
];