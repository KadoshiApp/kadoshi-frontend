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
            const { 
                fullName, ratingAvg, about, profilePhoto, userSlug, phoneNumber, location, experience, comments, profession
            } = action.data.data;

            return {
                ...state,
                profData: {
                    fullName,
                    ratingAvg,
                    userSlug,
                    experience,
                    comments,
                    location,
                    profession,
                    phoneNumber,
                    profilePhoto,
                    about,
                    joined: action.data.data.joined,
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