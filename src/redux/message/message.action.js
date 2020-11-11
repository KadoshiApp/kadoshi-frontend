import { messageActionTypes } from './message.types';

export const errorMessage = (message) => ({
  type: messageActionTypes.ERROR_MESSSAGE,
  message,
});

export const successMessage = (message) => ({
	type: messageActionTypes.SUCCESS_MESSAGE,
	message,
});

export const removeMessage = () => ({
	type: messageActionTypes.REMOVE_MESSAGE
});