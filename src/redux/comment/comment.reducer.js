import { commentActionTypes  } from "./comment.type";

const INITIAL_STATE = {
    comment: ' ',
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case commentActionTypes.COMMENT_SUCCESS:
            const { comment } = action.data
            return {
                ...state,
                comment
            }
        default:
            return state
    }
}

export default commentReducer;