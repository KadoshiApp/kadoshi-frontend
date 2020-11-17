import React from 'react'
// import ProfessionalRating from '../professionalRating/ProfessionalRating';
import ReactStars from "react-rating-stars-component";

import './professionalProfile.scss';


function ProfessionalProfile({data}) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

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
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#fa8964"
                        classNames="react_star"
                    />
                </div>
                    <button className='body-button'>VIEW</button>
                </div>
            </div>
    )
}

export default ProfessionalProfile;
