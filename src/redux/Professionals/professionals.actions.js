import Axios from "../../Axios.config";
import { loading } from "./../loading/loading.action";
import { errorMessage, successMessage } from "../message/message.action";
import { loginProfSuccess } from '../login/login.actions';


export const FETCH_PROFESSIONALS_SUCCESS = 'FETCH_PROFESSIONALS_SUCCESS';
export const FETCH_PROFESSIONALS_FAIL = 'FETCH_PROFESSIONALS_FAIL';
export const GET_PROFESSIONAL = 'GET_PROFESSIONAL';
export const GET_PROFESSIONAL_FAIL = 'GET_PROFESSIONAL_FAIL';

const fetchProfessionalsSuccess = (data) => ({
    type: FETCH_PROFESSIONALS_SUCCESS,
    data
})

const getProfessional = (data) => ({
	type: GET_PROFESSIONAL,
	data,
}); 

const getProfessionalFail = (message) => ({
	type: GET_PROFESSIONAL_FAIL,
	message,
}); 

const fetchProfessionalsFail = (message) => ({
    type: FETCH_PROFESSIONALS_FAIL,
    message
}) 

export const fetchProfessionals = () => async dispatch => {
    dispatch(loading(true))
    try {
        const professionals = await Axios.init().get(`professional`)
        dispatch(successMessage('available professionals fetched'))
        dispatch(fetchProfessionalsSuccess(professionals.data))
        dispatch(loading(false));
    } catch (err) {
        dispatch(loading(false));
        if (err.response?.data) {
            dispatch(errorMessage(err.response.data?.message))
            dispatch(fetchProfessionalsFail(err.response.data?.message))
            return
        } else if (err?.message) {
            // no op
            // dispatch(errorMessage(err.message));
        }
    }

}

export const sortProfessionals = (data) => async (dispatch) => {
	dispatch(loading(true));
	try {
        const { profession, location } = data
		const professionals = await Axios.init().get(`professional?location=${location}&profession=${profession}`);
		dispatch(successMessage('available professionals fetched'));
		dispatch(fetchProfessionalsSuccess(professionals.data));
		dispatch(loading(false));
	} catch (err) {
		dispatch(loading(false));
		if (err.response?.data) {
			dispatch(errorMessage(err.response.data?.message));
			dispatch(fetchProfessionalsFail(err.response.data?.message));
			return;
		} else if (err?.message) {
			// no op
			// dispatch(errorMessage(err.message));
		}
	}
};


export const viewProfessional = (userSlug) => async (dispatch) => {
	dispatch(loading(true));
	try {
		const professional = await Axios.init().get(
			`professional/${userSlug}`
		);
		dispatch(successMessage(professional.data.message));
		dispatch(getProfessional(professional.data));
		dispatch(loading(false));
	} catch (err) {
		dispatch(loading(false));
		if (err.response?.data) {
			// dispatch(errorMessage(err.response.data?.message));
			dispatch(getProfessionalFail(err.response.data?.message));
			return;
		} else if (err?.message) {
			// no op
			// dispatch(errorMessage(err.message));
		}
	}
};

export const updateProfessional = (data) => async (dispatch) => {
	dispatch(loading(true));
	try {
		const professional = await Axios.init().put(`professional`, {
			...data
		});
		dispatch(loginProfSuccess(professional?.data.professional));
		dispatch(successMessage(`${professional?.data?.message}`));
		dispatch(loading(false));
	} catch (err) {
		dispatch(loading(false));
		if (err.response?.data) {
			dispatch(errorMessage(err.response.data?.message));
			return;
		} else if (err?.message) {
			dispatch(errorMessage(err.message));
		}
	}
};