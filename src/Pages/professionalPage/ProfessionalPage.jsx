import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { errorMessage } from "../../redux/message/message.action";
import { fetchProfessionals, sortProfessionals } from '../../redux/Professionals/professionals.actions'

import TopNav from '../../components/topNav/topNav';
import ProfessionalCaption from '../../components/professionalCaption/ProfessionalCaption';
import ProfessionalBody from '../../components/professionalBody/ProfessionalBody';
import { FooterThin, FooterWide} from '../../components/footer/footer';
import ButtonBig from '../../components/buttonBig/buttonBig';

import './professionalPage.scss';

function ProfessionalPage() { 
    const history = useHistory();
    const dispatch = useDispatch()

    const initial = {
        product: '',
        location: ''
    }
    const [ inputData, setInputData ] = useState(initial)

    useEffect(() => {
        dispatch(fetchProfessionals());
    }, [dispatch])

    const handleInputs = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const searchClicked = () => {
        if (!inputData.location || !inputData.product) {
            return dispatch(errorMessage('Enter all fields.'))
        }
        
        if (inputData.location && inputData.product) {
            dispatch(sortProfessionals(inputData))
        }
    }

    const goHome = () => {
        history.push('/')
    }

    return (
        <>
        <div className='professional-page-header'>
            <TopNav />
            <ProfessionalCaption />
        </div>
        <ProfessionalBody values={inputData} change={handleInputs} clicked={searchClicked} />
        <div className='page-button'>
            < ButtonBig caption='go home' clicked={goHome} />
            </div>
            <FooterWide />
            <FooterThin />
        </>
    )
}

export default ProfessionalPage;
