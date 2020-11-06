import React from 'react';
import TopNav from '../../components/topNav/topNav';
import ProfessionalCaption from '../../components/professionalCaption/ProfessionalCaption';
import ProfessionalBody from '../../components/professionalBody/ProfessionalBody';

import './professionalPage.scss';

function ProfessionalPage() {

    return (
        <>
        <div className='professional-page-header'>
            <TopNav />
            <ProfessionalCaption />
        </div>
        <ProfessionalBody />
        </>
    )
}

export default ProfessionalPage;
