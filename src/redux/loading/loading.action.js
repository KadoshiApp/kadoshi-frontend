import { loadingActionTypes } from './loading.types';

export const loading = (payload) => ({
  type: loadingActionTypes.LOADING,
  payload,
});


export const toggleAuthModal = () => ({
	type: loadingActionTypes.TOGGLE_AUTH_MODAL,
});
