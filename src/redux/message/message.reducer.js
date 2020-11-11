import { messageActionTypes } from './message.types';

const INITIAL_STATE = {
    success: '',
    error: ''
};

const messageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case messageActionTypes.ERROR_MESSSAGE:
			return {
				...state,
                error: action.message,
                success: ''
            };
        
        case messageActionTypes.SUCCESS_MESSAGE:
            return {
                ...state,
                success: action.message,
                error: ''
            }

        case messageActionTypes.REMOVE_MESSAGE:
            return {
                ...state,
                success: '',
                error: ''
            }

		default:
			return state;
	}
};

export default messageReducer;
