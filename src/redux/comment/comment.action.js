import { commentActionTypes } from './comment.type';
import Axios from '../../Axios.config';
import Auth from '../../Auth.config';

import { errorMessage, successMessage } from "../message/message.action";

import { loading } from './../loading/loading.action';


const commentSuccess = (data) => ({
    type: commentActionTypes.COMMENT_SUCCESS,
    data
})

export const loginComment = data => async dispatch => {
    dispatch(loading(true))
     
    try {
        const comment = await Axios.init().post('https://kadoshiservices.herokuapp.com/api/professional/johnny-joe-634450132887013200', {
            ...data
        })
        dispatch(commentSuccess(comment.data))
        Auth.saveToken(comment.data.token)
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
