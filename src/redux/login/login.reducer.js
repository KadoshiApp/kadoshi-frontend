import { actionTypes } from "./login.types";

const INITIAL_STATE = {
    email: '',
    full_name: '',
    joined: '',
    slug: '',
    profData: {},
    isAuth: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            const { email, full_name, joined, slug } = action.data

            return {
                ...state,
                email,
                full_name,
                joined,
                slug
            }
        
        case actionTypes.LOGIN_PROF_SUCCESS:
            console.log(action.data, 'actiondata')
            const { fullName, ratingAvg, userSlug, experience, comment, profession  } = action.data.data;

            return {
                ...state,
                profData: {
                    fullName,
                    ratingAvg,
                    userSlug,
                    experience,
                    comment,
                    profession,
                    joined: action.data.data.joined,
                    location: action.data.data.state
                }
            }

        case actionTypes.IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }

        default:
            return state
    }
}

export default loginReducer;