import React from 'react'

import ButtonSmall from "../buttonSmall/buttonSmall";
import ButtonBig from "../buttonBig/buttonBig";

import './homeCaption.scss'

const HomeCaption = () => {
    return (
        <div className='home__caption'>
            <div className='home__caption_main'> In-Demand <br /> Service Professionals </div>
            <div className='home__caption_aside'> at your fingertips! </div>
            <div className='home__caption_btn'>
                <div>
                    <ButtonSmall caption='Hire Now!' />
                </div>
                <div>
                    <ButtonBig 
                        caption='Join as a Professional' 
                        plain
                        />
                </div>
            </div>
        </div>
    )
}

export default HomeCaption
