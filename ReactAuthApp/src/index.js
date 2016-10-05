import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { Router , Route , IndexRoute , browserHistory } from 'react-router';
import {AUTH_USER} from './actions/types';
import {Config} from './sagas/rootsaga.js'

const sagaMiddleware = createSagaMiddleware()
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware,reduxThunk,logger())(createStore);


const store = createStoreWithMiddleware(reducers);
sagaMiddleware.run(Config);
const token = localStorage.getItem('token');
// if token is present log back in 
if(token){
store.dispatch({type:AUTH_USER});

}
store.dispatch({type:'CONFIG'});

ReactDOM.render(
  <Provider store={store}>

    <Router history ={browserHistory} >
      <Route path ="/" component = {App} >
        <Route path="/signin" component ={Signin} />
        <Route path="/signout" component ={Signout} />
        <Route path="/signup" component ={Signup} />
		<Route path="/feature" component={RequireAuth(Feature)}/>
      </Route>
  </Router>
  </Provider>
  , document.querySelector('.containerApp'));



// run sagas 



