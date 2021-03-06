import { actionTypes } from './login.types';
import Axios from '../../Axios.config';
import Auth from '../../Auth.config';

import { errorMessage, successMessage } from "../message/message.action";

import { loading } from './../loading/loading.action';


const loginSuccess = (data)  => ({
    type: actionTypes.LOGIN_SUCCESS,
    data
})

export const isAuth = (payload) => ({
    type: actionTypes.IS_AUTH,
    payload
});

export const loginProfSuccess = (data) => ({
	type: actionTypes.LOGIN_PROF_SUCCESS,
	data,
});

export const loginClient = data => async dispatch => {
    dispatch(loading(true))
    const newData = { ...data, anonymous: true, reference: 1603093336782 };

    try {
        const login = await Axios.init().post('client/login', {
            ...newData
        })
        dispatch(loginSuccess(login.data.data))
        Auth.saveToken(login.data.token)
        dispatch(isAuth(true));
        dispatch(successMessage(login.data.message))
        dispatch(loading(false))
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

export const loginProf = (data) => async (dispatch) => {
	dispatch(loading(true));
	const newData = { ...data};

	try {
		const login = await Axios.init().post('professional/login', {
			...newData,
		});
        dispatch(loginProfSuccess(login.data.data));
        Auth.saveToken(login.data.token);
        dispatch(isAuth(true))
		dispatch(successMessage(login.data.message));
		dispatch(loading(false));
	} catch (err) {
        dispatch(loading(false));
        dispatch(isAuth(false))
		if (err.response?.data) {
            dispatch(errorMessage(err.response.data.message));
			return;
		} else if (err.message) {
			dispatch(errorMessage(err.message));
		}
	}
};


export const logoutUser = () => async dispatch => {
    dispatch(loading(true));
    dispatch(isAuth(false))
    Auth.removeToken()
    dispatch(loading(false))
}