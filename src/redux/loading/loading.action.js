import { loadingActionTypes } from './loading.types';

export const loading = (payload) => ({
  type: loadingActionTypes.LOADING,
  payload,
});
