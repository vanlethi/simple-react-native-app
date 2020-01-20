import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {taskReducer} from './todoRedux/taskReducer';
import {userReducer} from './userRedux/reducer';
import rootSagas from './rootSagas';
import {createLogger} from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({tasks: taskReducer, users: userReducer}),
  applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSagas);
export default store;
