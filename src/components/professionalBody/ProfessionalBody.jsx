import React from 'react';
import ProfessionalProfile from '../professionals-profile/ProfessionalProfile';

import './professionalBody.scss';

let data = [
    {
        id: 1,
        name: 'Micheal Adelegan',
        job: 'Carpenter',
        image: 'https://thumbs.dreamstime.com/z/carpenter-working-workshop-28992842.jpg',
        star: 5,
        rating: 5
    },
    {
        id: 2,
        name: 'Tunde Jimoh',
        job: 'Painter',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ5bqdh9pF7hNdKVrYTboYSRiIfTFMidQXQw&usqp=CAU',
        star: 5,
        rating: 5
    },
    {
        id: 3,
        name: 'Uhim Abiezedim',
        job: 'Plumber',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6PrxjQ_kaqUJBcszYDDVSgwq9rtnF8mUE2g&usqp=CAU',
        star: 5,
        rating: 5
    },
    {
        id: 4,
        name: 'James Turiel',
        job: 'Tailor',
        image: 'https://st3.depositphotos.com/3261171/19425/i/1600/depositphotos_194251744-stock-photo-serious-professional-tailor-holding-his.jpg',
        star: 5,
        rating: 5
    },
    {
        id: 5,
        name: 'Ademola Allen',
        job: 'Carpenter',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHVXXiOqTZMjCTvOoOKMnTlP_oITRcfjiGXA&usqp=CAU',
        star: 5,
        rating: 5
    },
    {
        id: 6,
        name: 'Niche Mahmud',
        job: 'Barber',
        image: 'https://lh3.googleusercontent.com/proxy/AEnZBdSZbFT2kAsmFaa_W9R2Uhf9mtJN_912EKE62k9SM1MxmLOrqLfQYRMdlnVntsqP4wC_djT0N0_7ZFrU9qj8eqpGAz_0D5fIzfuxKfXSWNXQAc0AlnoeY4JoF5eFCwxpMLUtTLZuEL9JTZBhSztRZDNlOfRP5gi3DcI9V7RD',
        star: 5,
        rating: 5
    }
];

const ProfessionalBody = props => {

    return (
        <div className='service-body-background'>
            <div className='professional-view'>Available Professonals</div>
            <div className='professional-data'>
            {data.map((data, index)=> (
            <ProfessionalProfile data={data} key={index}/>
            ))}
            </div>
                </div>
    )
}

export default ProfessionalBody;
