import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { getExampleSaga } from './example';

export function* watchGetExampleSaga() {
  yield takeLatest(actionTypes.GET_EXAMPLE, getExampleSaga);
}
