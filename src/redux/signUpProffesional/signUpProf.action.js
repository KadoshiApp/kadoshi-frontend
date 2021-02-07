import Axios from '../../Axios.config';
import Auth from '../../Auth.config'
import { isAuth } from '../login/login.actions'

import { loading } from "../loading/loading.action";
import { loginProfSuccess } from '../login/login.actions';
import { errorMessage, successMessage } from '../message/message.action'

export const signUpProf = (data) => async (dispatch) => {
    dispatch(loading(true));

    try {
        const signedUp = await Axios.init().post('professional/signup', {
            ...data
        })
        dispatch(loading(false));
        Auth.saveToken(signedUp.data.token);
        dispatch(isAuth(true));
        dispatch(successMessage(signedUp.data?.message));
        dispatch(loginProfSuccess(signedUp?.data?.data));
    } catch (err) {
        dispatch(loading(false));
        dispatch(isAuth(false));
        if (err.response?.data) {
            dispatch(errorMessage(err.response.data.message))
            return
        } else if (err.message) {
            dispatch(errorMessage(err.message));
        }
    }
}