import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initalState = {
  example: false,
  fetchedExample: null,
  error: null,
};

const toggleExample = (state, action) => {
  return updateObject(state, { example: !state.example });
};

const getExampleSuccess = (state, action) => {
  return updateObject(state, { fetchedExample: action.fetchedExample });
};

const getExampleFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_EXAMPLE:
      return toggleExample(state, action);
    case actionTypes.GET_EXAMPLE_SUCCESS:
      return getExampleSuccess(state, action);
    case actionTypes.GET_EXAMPLE_FAIL:
      return getExampleFail(state, action);
    default:
      return state;
  }
};

export default reducer;
