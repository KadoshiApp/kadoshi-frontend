import { commentActionTypes } from './comment.type';
import Axios from '../../Axios.config';

import { errorMessage, successMessage } from "../message/message.action";

import { loading } from './../loading/loading.action';


const commentSuccess = (data) => ({
    type: commentActionTypes.COMMENT_SUCCESS,
    data
})

export const loginComment = data => async dispatch => {
    dispatch(loading(true))
    const { comment, rating, user } = data;
    const body = { comment, rating };
     
    try {
        const comment = await Axios.init().post(`https://kadoshiservices.herokuapp.com/api/professional/${user}`, {
            ...body
        })
        dispatch(commentSuccess(comment.data))
        dispatch(successMessage(comment.data.message))
        dispatch(loading(false))
    } catch (err) {
        dispatch(loading(false));
        if (err.response?.data) {
            dispatch(errorMessage(err.response.data.message))
            return
        } else if (err.message) {
            dispatch(errorMessage(err.message));
        }
    }
};
