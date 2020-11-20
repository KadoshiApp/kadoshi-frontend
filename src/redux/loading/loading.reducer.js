import { loadingActionTypes } from './loading.types';

const INITIAL_STATE = {
	state: false,
	modal: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case loadingActionTypes.LOADING:
			return {
				...state,
				state: action.payload,
			};

		case loadingActionTypes.TOGGLE_AUTH_MODAL:
      const show = state.modal
			return {
				...state,
				modal: !show,
			};

		default:
			return state;
	}
};

export default loadingReducer;
