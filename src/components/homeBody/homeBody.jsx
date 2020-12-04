import React, { Fragment } from 'react'
import './homeBody.scss'

const HomeBody = () => {
    return (
        <Fragment>
            <div className='home__body_one'>
                <div className='home__body_caption'> Get Started in the three simple steps! </div>
                <div className='home__body_one_container'>
                    <div className='home__body_onestep'>Step One: 
                        <span>
                            Get Registered!
                        </span> 
                    </div>
                    <div>
                    Register as a Professional or a client.
                    </div>
                </div>
            </div>

            <div className='home__body_two'>
                <div className='home__body_two_container'>
                    <div className='home__body_twostep'>Step Two: 
                        <span>
                            Request a Service!
                        </span> 
                    </div>
                    <div>
                    Click to meet a vendor and check available services.
                    </div>
                </div>
            </div>

            <div className='home__body_one _body_three'>
                <div className='home__body_one_container'>
                    <div className='home__body_onestep _stepthree'>Step Three: 
                        <span>
                            Select Professional!
                        </span> 
                    </div>
                    <div>
                    Chose your prefered professionals based on profile rating recomendation and pictures of previous works.
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeBody
