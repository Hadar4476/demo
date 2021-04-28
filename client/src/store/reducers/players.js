import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initalState = {
  players: [],
  loading: false,
  error: null,
};

const getPlayersPerCountry = (state, action) => {
  return updateObject(state, {
    players: action.fetchedPlayers,
    loading: true,
  });
};

const getPlayersPerCountrySuccess = (state, action) => {
  return updateObject(state, {
    players: action.fetchedPlayers,
    loading: false,
    error: null,
  });
};

const getPlayersPerCountryFail = (state, action) => {
  return updateObject(state, {
    players: [],
    loading: false,
    error: action.error,
  });
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERS_PER_COUNTRY:
      return getPlayersPerCountry(state, action);
    case actionTypes.GET_PLAYERS_PER_COUNTRY_SUCCESS:
      return getPlayersPerCountrySuccess(state, action);
    case actionTypes.GET_PLAYERS_PER_COUNTRY_FAIL:
      return getPlayersPerCountryFail(state, action);
    default:
      return state;
  }
};

export default reducer;
