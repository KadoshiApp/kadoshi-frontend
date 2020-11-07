import React from 'react';
import TopNav from '../../components/topNav/topNav';
import ProfessionalCaption from '../../components/professionalCaption/ProfessionalCaption';
import ProfessionalBody from '../../components/professionalBody/ProfessionalBody';
import { FooterThin, FooterWide} from '../../components/footer/footer';
import ButtonBig from '../../components/buttonBig/buttonBig';

import './professionalPage.scss';

function ProfessionalPage() {

    return (
        <>
        <div className='professional-page-header'>
            <TopNav />
            <ProfessionalCaption />
        </div>
        <ProfessionalBody />
        <div className='page-button'>
            < ButtonBig caption='go home' />
            </div>
            <FooterWide />
            <FooterThin />
        </>
    )
}

export default ProfessionalPage;
