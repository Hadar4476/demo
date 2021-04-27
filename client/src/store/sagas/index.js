import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
  getCountriesSaga,
  getCountryDetailsSaga,
  searchForCountrySaga,
} from './countries';
import { getPlayersPerCountrySaga } from './players';

export function* watchGetCountries() {
  yield takeEvery(actionTypes.GET_COUNTRIES, getCountriesSaga);
}

export function* watchGetCountryDetails() {
  yield takeEvery(actionTypes.GET_COUNTRY_DETAILS, getCountryDetailsSaga);
}

export function* watchSearchForCountrySaga() {
  yield takeLatest(actionTypes.SEARCH_FOR_COUNTRY, searchForCountrySaga);
}

export function* watchGetPlayersPerCountry() {
  yield takeLatest(
    actionTypes.GET_PLAYERS_PER_COUNTRY,
    getPlayersPerCountrySaga
  );
}
