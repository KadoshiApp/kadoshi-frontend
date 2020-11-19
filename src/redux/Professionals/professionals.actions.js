import Axios from "../../Axios.config";
import { loading } from "./../loading/loading.action";
import { errorMessage, successMessage } from "../message/message.action";


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
        console.log(professionals.data, 'Professionals')
        dispatch(successMessage('available professionals fetched'))
        dispatch(fetchProfessionalsSuccess(professionals.data))
        dispatch(loading(false))
    } catch (err) {
        dispatch(loading(false));
        if (err.response?.data) {
            dispatch(errorMessage(err.response.data?.message))
            dispatch(fetchProfessionalsFail(err.response.data?.message))
            return
        } else if (err?.message) {
            console.log(err.message);
            // dispatch(errorMessage(err.message));
        }
    }

}

export const sortProfessionals = (data) => async (dispatch) => {
	dispatch(loading(true));
	try {
        const { product, location } = data
		const professionals = await Axios.init().get(`professional?state=${location}?job_type=${product}`);
		console.log(professionals.data, 'Professionals');
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
			console.log(err.message);
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
		console.log(professional.data, "Professionals");
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
			console.log(err.message);
			// dispatch(errorMessage(err.message));
		}
	}
};