import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { errorMessage } from "../../redux/message/message.action";
import { toggleAuthModal } from '../../redux/loading/loading.action'
import { fetchProfessionals, sortProfessionals } from '../../redux/Professionals/professionals.actions'

import { AiOutlineWarning } from 'react-icons/ai'
import TopNav from '../../components/topNav/topNav';
import ProfessionalCaption from '../../components/professionalCaption/ProfessionalCaption';
import ProfessionalBody from '../../components/professionalBody/ProfessionalBody';
import { FooterThin, FooterWide} from '../../components/footer/footer';
import ButtonBig from '../../components/buttonBig/buttonBig';
import ViewModal from "../../components/viewModal/viewModal";

import './professionalPage.scss';

function ProfessionalPage() { 
    const history = useHistory();
    const modal = useSelector((state) => state.loadingReducer.modal)
    const dispatch = useDispatch()

    const initial = {
        product: '',
        location: ''
    }
    const [ inputData, setInputData ] = useState(initial);

    useEffect(() => {
        dispatch(fetchProfessionals());
    }, [dispatch])

    const handleInputs = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const searchClicked = () => {
        if (!inputData.location && !inputData.product) {
            return dispatch(errorMessage('Enter all fields.'))
        }
        
        if (inputData.location || inputData.product) {
            dispatch(sortProfessionals(inputData))
            setInputData({...inputData, product: '', location: ''})
        }
    }

    const goHome = () => {
        history.push('/')
    }

    const signIn = () => {
        dispatch(toggleAuthModal());
        history.push('/signIn')
    }

    const signUp = () => {
        dispatch(toggleAuthModal());
        history.push('/account');
    };

    const closeModal = () => {
        dispatch(toggleAuthModal())
    }

    let authModal = <div> </div>;
        if (modal) {
            authModal = (
                <ViewModal modal={modal} showModal={closeModal}>
                    <div className='professional__authmodal'>
                        <div> <AiOutlineWarning /> </div>
                        <div> You Must Sign In To View Professionals </div>
                        <div> 
                            <p> Our account creation process is very simple. </p>
                            <p> Access it via the links below </p> 
                        </div>
                        <div> 
                            <ButtonBig caption='sign up' clicked={signUp} />
                            <ButtonBig caption='login' clicked={signIn} />
                        </div>
                    </div>
                </ViewModal>
            );
        }
    
    return (
        <>
        {authModal}
        <div className='professional-page-header'>
            <TopNav />
            <ProfessionalCaption />
        </div>
        <ProfessionalBody values={inputData} change={handleInputs} clicked={searchClicked} />
        <div className='page-button'>
            <ButtonBig caption='go home' clicked={goHome} />
        </div>
        <FooterWide />
        <FooterThin />
        </>
    )
}

export default ProfessionalPage;
