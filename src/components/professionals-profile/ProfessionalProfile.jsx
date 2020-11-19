import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { viewProfessional } from '../../redux/Professionals/professionals.actions'
// import ProfessionalRating from '../professionalRating/ProfessionalRating';
import ReactStars from "react-rating-stars-component";

import './professionalProfile.scss';


function ProfessionalProfile({data}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const ratingChanged = (newRating) => {
        return
    };

    const view = (user) => {
        if (user) {
            history.push('/professional')
            dispatch(viewProfessional(user))
        }
    }

    return (
        <div className='service-profile-info'>
            <div className='profile-pic'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ5bqdh9pF7hNdKVrYTboYSRiIfTFMidQXQw&usqp=CAU' className='profile-pic' alt="img"/>
            </div>
            <div className='profile-info'>
                <div className='profile-name'>
                {data.fullName}
                <br /><span> Plumber </span> </div>
                <div className='profile-rating'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#fa8964"
                        classNames="react_star"
                    />
                </div>
                    <button className='body-button' onClick={() => view(data.userSlug)}>VIEW</button>
                </div>
            </div>
    )
}

export default ProfessionalProfile;
