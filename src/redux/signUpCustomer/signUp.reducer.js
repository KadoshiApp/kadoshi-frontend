import * as actionTypes from './signUp.types';

const INITIAL_STATE = {
    full_name: '',
    joined: '',
	email: '',
	errorMessage: null,
	slug: '',
};

const signUpCustomerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_SUCCESS:
            const { full_name, email, slug, joined } = action.payload
            return {
                ...state,
                full_name,
                errorMessage: null,
                slug,
                email,
                joined
            }

        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                errorMessage: action.message
            }

        default:
            return state
    }
}

export default signUpCustomerReducer;