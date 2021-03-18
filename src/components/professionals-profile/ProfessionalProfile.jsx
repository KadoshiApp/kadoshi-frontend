import React from 'react'
import Auth from '../../Auth.config';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthModal } from '../../redux/loading/loading.action'
import ReactStars from "react-rating-stars-component";

import './professionalProfile.scss';


function ProfessionalProfile({data}) {
    const history = useHistory()
    const auth = useSelector((state) => state.loginReducer.isAuth);
    const dispatch = useDispatch()
    const imgUrl = data?.profilePhoto || 'https://res.cloudinary.com/kadoshi/image/upload/v1608798891/mpg5arv2cdh3vl1vk89c.png';

    const view = (user) => {
        if (user && auth) {
            history.push(`/professional/${user}`)
        } else {
            dispatch(toggleAuthModal())
        }
    }

    return (
        <div className='service-profile-info'>
            <div className='profile-pic'>
                <img src={imgUrl} className='profile-pic' alt="img"/>
            </div>
            <div className='profile-info'>
                <div className='profile-name'>
                {data.fullName}
                <br /><span> {data.profession} </span> </div>
                <div className='profile-rating'>
                    <ReactStars
                        count={5}
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
