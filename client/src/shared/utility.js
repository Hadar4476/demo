export const updateObject = (state, props) => {
  return {
    ...state,
    ...props,
  };
};

export const checkValidity = (value, controlName) => {
  let isValid = false;
  let trimValue = value.trim().toLowerCase();
  switch (controlName) {
    default:
      isValid = true;
      break;
  }
  return isValid;
};
