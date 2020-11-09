import * as actionTypes from './actionTypes.js';

const INITIAL_STATE = {
  initial: true
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.UPDATE_INDEX:
      return {
        ...state,
        [action.key]: action.value,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
