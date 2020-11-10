import * as actionTypes from './signUp.types';

const INITIAL_STATE = {
	loggedIn: false,
    full_name: '',
    joined: '',
	email: '',
	loading: false,
	errorMessage: null,
	slug: '',
};

const signUpCustomerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_SUCCESS:
            const { full_name, email, slug, joined } = action.payload
            return {
                ...state,
                loggedIn: true,
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