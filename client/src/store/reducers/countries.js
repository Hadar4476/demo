import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initalState = {
  countries: [],
  countryDetails: [],
  error: null,
  searchInput: '',
};

const getCountriesSuccess = (state, action) => {
  return updateObject(state, { countries: action.fetchedCountries });
};

const getCountriesFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const getCountryDetails = (state, action) => {
  return updateObject(state, { countryDetails: [] });
};

const getCountryDetailsSuccess = (state, action) => {
  return updateObject(state, { countryDetails: action.countryDetails });
};

const getCountryDetailsFailed = (state, action) => {
  return updateObject(state, { error: action.error });
};

const searchForCountry = (state, action) => {
  return updateObject(state, { searchInput: action.searchInput });
};

const updateCountries = (state, action) => {
  return updateObject(state, { countries: action.updatedCountries });
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_COUNTRIES_SUCCESS:
      return getCountriesSuccess(state, action);
    case actionTypes.GET_COUNTRIES_FAIL:
      return getCountriesFail(state, action);
    case actionTypes.GET_COUNTRY_DETAILS:
      return getCountryDetails(state, action);
    case actionTypes.GET_COUNTRY_DETAILS_SUCCESS:
      return getCountryDetailsSuccess(state, action);
    case actionTypes.GET_COUNTRY_DETAILS_FAIL:
      return getCountryDetailsFailed(state, action);
    case actionTypes.SEARCH_FOR_COUNTRY:
      return searchForCountry(state, action);
    case actionTypes.UPDATE_COUNTRIES:
      return updateCountries(state, action);
    default:
      return state;
  }
};

export default reducer;
