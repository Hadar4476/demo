import * as actionTypes from './actionTypes';

export const getCountries = () => {
  return {
    type: actionTypes.GET_COUNTRIES,
  };
};

export const getCountriesSuccess = (fetchedCountries) => {
  return {
    type: actionTypes.GET_COUNTRIES_SUCCESS,
    fetchedCountries: fetchedCountries,
  };
};

export const getCountriesFailed = (error) => {
  return {
    type: actionTypes.GET_COUNTRIES_FAIL,
    error: error,
  };
};

export const getCountryDetails = (countryName) => {
  return {
    type: actionTypes.GET_COUNTRY_DETAILS,
    countryName: countryName,
  };
};

export const getCountryDetailsSuccess = (countryDetails) => {
  return {
    type: actionTypes.GET_COUNTRY_DETAILS_SUCCESS,
    countryDetails: countryDetails,
  };
};

export const getCountryDetailsFailed = (error) => {
  return {
    type: actionTypes.GET_COUNTRY_DETAILS_FAIL,
    error: error,
  };
};

export const searchForCountry = (searchInput) => {
  return {
    type: actionTypes.SEARCH_FOR_COUNTRY,
    searchInput: searchInput,
  };
};

export const updateCountries = (updatedCountries) => {
  return {
    type: actionTypes.UPDATE_COUNTRIES,
    updatedCountries: updatedCountries,
  };
};
