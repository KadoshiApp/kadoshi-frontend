import React from 'react';

import ButtonBig from '../buttonBig/buttonBig';

import './aboutBody.scss';

const AboutBody = () => {
    return (
        <div className="about_body"> 
            <p>"kADOSHI.com" is the brainchild of our imaginationthe we cherish greatly. it is something to generate a platform where employers/clients
            and proffessionals can interact. It is another thing to create interaction in an enviromentthat potrays security, ease and transparency.
            We work to bring a platform that creates adequate visibility and trust for professionals of choice and strategically, effortlessly and transparently. 
            Our mission is to connect proffessionals to clients without restriction. Simply register and enjoy. 
            </p>
            <div className='home__head_btn'>
                <ButtonBig  caption='get started today!' />
            </div>
        </div>
    );
}

export default AboutBody;