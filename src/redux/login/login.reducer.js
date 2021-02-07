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