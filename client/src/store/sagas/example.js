import { put } from 'redux-saga/effects';
import axios from '../../myaxios';
import jwtDecode from 'jwt-decode';
import * as actions from '../actions';

const tokenKey = 'token';

export function* getExampleSaga() {
  try {
    const { data } = yield axios.get('/example');
    if (data) {
      yield put(actions.getExampleSuccess(data));
    }
  } catch (error) {
    yield put(actions.getExampleFail(error.response.data));
  }
}
