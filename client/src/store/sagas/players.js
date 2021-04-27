import { put } from 'redux-saga/effects';
import axios from '../../myaxios';

import * as actions from '../actions';

export function* getPlayersPerCountrySaga({ countryCode }) {
  try {
    const { data } = yield axios.get(`/players/${countryCode}`);
    if (data.length) {
      yield put(actions.getPlayersPerCountrySuccess(data));
    }
  } catch (error) {
    const errorMessage = error.response.data;
    yield put(actions.getPlayersPerCountryFail(errorMessage));
  }
}
