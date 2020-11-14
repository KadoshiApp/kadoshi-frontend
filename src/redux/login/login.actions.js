import { actionTypes } from './login.types';
import Axios from '../../Axios.config';
import { errorMessage, successMessage } from "../message/message.action";

import { loading } from './../loading/loading.action';


const loginSuccess = (data)  => ({
    type: actionTypes.LOGIN_SUCCESS,
    data
})

const loginFail = () => ({
    type: actionTypes.LOGIN_FAIL
})

export const loginClient = data => async dispatch => {
    dispatch(loading(true))
    const newData = { ...data, anonymous: true, reference: 1603093336782 };

    try {
        const login = await Axios.init().post('client/login', {
            ...newData
        })
        console.log(login)
        dispatch(loading(false))
    } catch (err) {
        dispatch(loading(false));
        console.log(err)
    }
}