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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam. Lorem ipsum dolor sit amet.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam. Lorem ipsum dolor sit amet.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quam. Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeBody
