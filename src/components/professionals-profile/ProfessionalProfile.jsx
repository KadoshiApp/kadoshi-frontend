import React from 'react'
import Auth from '../../Auth.config';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from '../../redux/loading/loading.action'
import ReactStars from "react-rating-stars-component";

import './professionalProfile.scss';


function ProfessionalProfile({data}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const ratingChanged = (newRating) => {
        return
    };

    const view = (user) => {
        if (user && Auth.getToken()) {
            history.push(`/professional/${user}`)
        } else {
            dispatch(toggleAuthModal())
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
                <br /><span> {data.profession} </span> </div>
                <div className='profile-rating'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#fa8964"
                        classNames="react_star"
                        edit={false}
                        value={data?.ratingAvg}
                    />
                </div>
                    <button className='body-button' onClick={() => view(data.userSlug)}>VIEW</button>
                </div>
            </div>
    )
}

export default ProfessionalProfile;
