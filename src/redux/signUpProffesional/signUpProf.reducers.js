import * as actionTypes from './signUpProf.types';

const INITIAL_STATE = {
	fullName: "",
	joined: "",
	errorMessage: null,
    userSlug: '',
    experience: null,
    comments: [],
    rating: [],
    ratingAvg: 0,
};

const signUpProfReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SIGNUPPROF_SUCCESS:
			const { fullName, rating, ratingAvg, userSlug, joined, experience, comments } = action.payload;
			return {
				...state,
                rating,
                ratingAvg,
                experience,
                comments,
				fullName,
				errorMessage: null,
				userSlug,
				joined,
			};

		case actionTypes.SIGNUPPROF_FAIL:
			return {
				...state,
				errorMessage: action.message,
			};

		default:
			return state;
	}
};

export default signUpProfReducer;
