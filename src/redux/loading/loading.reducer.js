import { loadingActionTypes } from './loading.types';

const INITIAL_STATE = {
  state: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loadingActionTypes.LOADING:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

export default loadingReducer;
