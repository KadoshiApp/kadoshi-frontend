import * as actionTypes from './signUpProf.types';
import Axios from '../../Axios.config';
import { loading } from "../loading/loading.action";
import { errorMessage, successMessage } from '../message/message.action'

export const signUpProfStart = () => {
    return {
        type: actionTypes.SIGNUPPROF_START
    }
}

export const signUpProfSuccess = (payload) => {
    return {
        type: actionTypes.SIGNUPPROF_SUCCESS,
        payload
    }
}

export const signUpProfFail = (message) => {
    return {
        type: actionTypes.SIGNUPPROF_FAIL,
        message
    }
}

export const signUpProf = (data) => async (dispatch) => {
    dispatch(signUpProfStart())
    dispatch(loading(true));

    try {
        const signedUp = await Axios.init().post('professional/signup', {
            ...data
        })
        dispatch(loading(false));
        localStorage.setItem('x-access-token', signedUp.data.token);
        dispatch(successMessage(signedUp.data.message))
        dispatch(signUpProfSuccess(signedUp.data.data));
    } catch (err) {
        dispatch(loading(false));
        if (err.response?.data) {
            dispatch(signUpProfFail(err.response.data.message))
            dispatch(errorMessage(err.response.data.message))
            return
        } else if (err.message) {
            console.log(err.message)
            dispatch(signUpProfFail(err.message));
            dispatch(errorMessage(err.message));
        }
    }

}