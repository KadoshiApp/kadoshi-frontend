import { actionTypes } from "./login.types";

const INITIAL_STATE = {
    email: '',
    full_name: '',
    joined: '',
    slug: '',
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

        default:
            return state
    }
}

export default loginReducer;