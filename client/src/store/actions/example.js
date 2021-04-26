import * as actionTypes from './actionTypes';

export const toggleExample = () => {
  return {
    type: actionTypes.TOGGLE_EXAMPLE,
  };
};

export const getExample = () => {
  return {
    type: actionTypes.GET_EXAMPLE,
  };
};
export const getExampleSuccess = (fetchedExample) => {
  return {
    type: actionTypes.GET_EXAMPLE_SUCCESS,
    fetchedExample: fetchedExample,
  };
};
export const getExampleFail = (error) => {
  return {
    type: actionTypes.GET_EXAMPLE_FAIL,
    error: error,
  };
};
