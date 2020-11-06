import React from 'react'

import ButtonSmall from'../buttonSmall/buttonSmall';
import { Flex, Icon} from "@chakra-ui/core";

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
                    <div>
                    <Flex align='center' justifyContent='center'>
                    <Icon name="star" size="22px" color="red.500" p={[0, 2]} />
                    <Icon name="star" size="22px" color="red.500" p={[0, 2]} />
                    <Icon name="star" size="22px" color="red.500" p={[0, 2]} />
                    <Icon name="star" size="22px" color="red.500" p={[0, 2]} />
                    <Icon name="star" size="22px" color="red.500" p={[0, 2]} />
                    </Flex>
                    <span>Rating:4.1</span></div>
                    <div className='body-button'>
                        <ButtonSmall caption='VIEW' />
                    </div>
                    </div>
                    </div>
                    </div>
    )
}

export default ProfessionalProfile;
