import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { errorMessage } from "../../redux/message/message.action";

import TopNav from '../../components/topNav/topNav';
import ProfessionalCaption from '../../components/professionalCaption/ProfessionalCaption';
import ProfessionalBody from '../../components/professionalBody/ProfessionalBody';
import { FooterThin, FooterWide} from '../../components/footer/footer';
import ButtonBig from '../../components/buttonBig/buttonBig';

import './professionalPage.scss';

function ProfessionalPage() { 
    const dispatch = useDispatch()

    const initial = {
        product: '',
        location: ''
    }
    const [ inputData, setInputData ] = useState(initial)

    const handleInputs = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const searchClicked = () => {
        if (!inputData.location || !inputData.product) {
            return dispatch(errorMessage('Enter all fields.'))
        }
    }

    return (
        <>
        <div className='professional-page-header'>
            <TopNav />
            <ProfessionalCaption />
        </div>
        <ProfessionalBody values={inputData} change={handleInputs} clicked={searchClicked} />
        <div className='page-button'>
            < ButtonBig caption='go home' />
            </div>
            <FooterWide />
            <FooterThin />
        </>
    )
}

export default ProfessionalPage;
