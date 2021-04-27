import { put } from 'redux-saga/effects';
import axios from 'axios';
import myAxios from '../../myaxios';

import * as actions from '../actions';

export function* getCountriesSaga(action) {
  try {
    const { data } = yield myAxios.get('/countries');
    if (data.length) {
      yield put(actions.getCountriesSuccess(data));
    }
  } catch (error) {
    const errorMessage = error.response.data;
    yield put(actions.getCountriesFailed(errorMessage));
  }
}

export function* getCountryDetailsSaga({ countryName }) {
  try {
    const { data } = yield axios.get(
      `https://restcountries.eu/rest/v2/name/${countryName}`
    );
    if (data.length) {
      const { capital, population, currencies, languages } = data[0];
      const mappedCountryDetailsObject = {
        capital: capital,
        population: population,
        currencies: currencies,
        languages: languages,
      };
      yield put(actions.getCountryDetailsSuccess(mappedCountryDetailsObject));
    }
  } catch (error) {
    const errorMessage = error.response.data;
    yield put(actions.getCountryDetailsFailed(errorMessage));
  }
}

export function* searchForCountrySaga({ searchInput }) {
  try {
    const { data } = yield myAxios.get(`/countries/search/${searchInput}`);
    if (data.length) {
      yield put(actions.updateCountries(data));
    }
  } catch (error) {
    return;
  }
}
