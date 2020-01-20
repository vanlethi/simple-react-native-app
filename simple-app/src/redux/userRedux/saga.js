import {call, put, takeLatest} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {callAPI} from '../../api';
import bottomTabs from '../../screens/Navigations';

function* login(action) {
  console.log('Action: ', action);
  try {
    const data = yield call(() => callAPI('login', 'POST', action.payload));
    yield put({type: 'LOGIN_SUCCESS', payload: data.data});
    yield AsyncStorage.setItem('latestUser', data.data.token);
    // console.log('Token in Saga =>', data.data.token);
    bottomTabs();
  } catch (e) {
    yield put({type: 'LOGIN_FAILURE', payload: e.response.data.message});
  }
}
function* logout() {
  // const value = AsyncStorage.getItem('Token');
  // console.log('token=>', value);
}

function* register(action) {
  console.log('Action: ', action);
  try {
    const data = yield call(() => callAPI('register', 'POST', action.payload));
    console.log('Data: ', data.data);
    yield put({type: 'REGISTER_SUCCESS', payload: data.data});
    bottomTabs(data.data);
  } catch (e) {
    console.log('err: ', e.response.data.message);
    yield put({type: 'REGISTER_FAILURE', payload: e.response.data.message});
  }
}

function* userSaga() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('REGISTER', register);
}
export default userSaga;
