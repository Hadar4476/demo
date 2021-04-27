import * as actionTypes from './actionTypes';

export const getPlayersPerCountry = (countryCode) => {
  return {
    type: actionTypes.GET_PLAYERS_PER_COUNTRY,
    countryCode: countryCode,
  };
};

export const getPlayersPerCountrySuccess = (fetchedPlayers) => {
  return {
    type: actionTypes.GET_PLAYERS_PER_COUNTRY_SUCCESS,
    fetchedPlayers: fetchedPlayers,
  };
};

export const getPlayersPerCountryFail = (error) => {
  return {
    type: actionTypes.GET_PLAYERS_PER_COUNTRY_FAIL,
    error: error,
  };
};
