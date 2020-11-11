import React from 'react'
import ProfessionalRating from '../professionalRating/ProfessionalRating';

import './professionalProfile.scss';


function ProfessionalProfile({data}) {
    return (
        <div className='service-profile-info'>
                <div className='profile-pic'>
                    <img src={data.image} className='profile-pic' alt="img"/>
                </div>
                <div className='profile-info'>
                    <div className='profile-name'>
                    {data.name}
                    <br /><span>{data.job}</span> </div>
                    <div className='profile-rating'>
                    <ProfessionalRating />
                    </div>
                        <button className='body-button'>VIEW</button>
                    </div>
                    </div>
    )
}

export default ProfessionalProfile;
