import { actionTypes } from "./login.types";
import Auth from '../../Auth.config'

const INITIAL_STATE = {
    email: '',
    full_name: '',
    joined: '',
    slug: '',
    profData: {},
    isAuth: Auth.isAuthenticated()
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
            const {
                comments,
                experience,
                fullName,
                location,
                phoneNumber,
                profession,
                profilePhoto,
                ratingAvg,
                userSlug,
                works,
                about,
            } = action.data;
            return {
                ...state,
                profData: {
                    comments,
                    experience,
                    fullName,
                    joined: action.data.joined,
                    location,
                    phoneNumber,
                    profession,
                    profilePhoto,
                    ratingAvg,
                    userSlug,
                    works,
                    about,
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