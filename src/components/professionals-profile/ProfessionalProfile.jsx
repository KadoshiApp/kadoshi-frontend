import React from 'react'
// import Rating from '@material-ui/lab/Rating';

import './professionalProfile.scss';


function ProfessionalProfile({data}) {
    return (
        <div className='service-profile-info'>
                <div className='profile-pic'>
                    <img src={data.image} className='profile-pic' />
                </div>
                <div className='profile-info'>
                    <div className='profile-name'>
                    {data.name}
                    <br /><span>{data.job}</span>
                    <div className='profile-name'>
                    {/* <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                />
                                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>} */}
                    <span>Rating:4.1</span></div>
                        <button className='body-button'>VIEW</button>
                        
                                 </div>
                    </div>
                    </div>
    )
}

export default ProfessionalProfile;
