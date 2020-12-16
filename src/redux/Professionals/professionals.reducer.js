import { 
    FETCH_PROFESSIONALS_FAIL,
    FETCH_PROFESSIONALS_SUCCESS,
    GET_PROFESSIONAL,
    GET_PROFESSIONAL_FAIL
 } from './professionals.actions'

const INITIAL_STATE = {
    professions: [],
    message: null,
    professionalData: {}
};

const ProfessionalsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case FETCH_PROFESSIONALS_SUCCESS:
            const { professions, message } = action.data
			return {
                ...state,
                professions,
                message
            }

        case FETCH_PROFESSIONALS_FAIL:
            return {
                ...state,
                message: action.message
            }

        case GET_PROFESSIONAL: 
            return {
                ...state,
                professionalData: action.data.data
            }

        case GET_PROFESSIONAL_FAIL:
            return {
                ...state,
                message: action.message
            }

		default:
			return state;
	}
};

export default ProfessionalsReducer;
