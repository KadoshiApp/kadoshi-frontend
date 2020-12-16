import * as actionTypes from './signUp.types';
import Axios from '../../Axios.config';
import Auth from "../../Auth.config";

import { loading } from "./../loading/loading.action";
import { errorMessage, successMessage } from '../message/message.action'
import { isAuth } from '../login/login.actions'

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
        Auth.saveToken(signedUp.data.token);
        dispatch(isAuth(true))
        dispatch(successMessage(signedUp.data.message))
        dispatch(signUpSuccess(signedUp.data.data));
    } catch (err) {
        dispatch(loading(false));
        dispatch(isAuth(false))
        if (err.response?.data) {
            dispatch(signUpFail(err.response.data.message))
            dispatch(errorMessage(err.response.data.message))
            return
        } else if (err.message) {
            dispatch(signUpFail(err.message));
            dispatch(errorMessage(err.message));
        }
    }

}