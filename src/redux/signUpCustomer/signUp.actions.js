import * as actionTypes from './signUp.types';
import Axios from '../../Axios.config';
import { loading } from "./../loading/loading.action";
import { errorMessage, successMessage } from '../message/message.action'

export const signUpSuccess = (payload) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        payload
    }
}

export const signUpFail = (message) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        message
    }
}

export const signUpCustomer = (data) => async (dispatch) => {
    dispatch(loading(true));

    try {
        const signedUp = await Axios.init().post('client/signup', {
            ...data
        })
        dispatch(loading(false));
        localStorage.setItem('x-access-token', signedUp.data.token);
        dispatch(successMessage(signedUp.data.message))
        dispatch(signUpSuccess(signedUp.data.data));
    } catch (err) {
        dispatch(loading(false));
        if (err.response?.data) {
            dispatch(signUpFail(err.response.data.message))
            dispatch(errorMessage(err.response.data.message))
            return
        } else if (err.message) {
            console.log(err.message)
            dispatch(signUpFail(err.message));
            dispatch(errorMessage(err.message));
        }
    }

}