import React from 'react';
import ProfessionalOption from '../professionalOption/ProfessionalOption';
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsUvkw0E0bXnCWcNafZxRYImXUrzGz9uNm1w&usqp=CAU',
        star: 5,
        rating: 5
    },
    {
        id: 6,
        name: 'Niche Mahmud',
        job: 'Barber',
        image: 'https://ae01.alicdn.com/kf/H5dd556cdad0840a4ace61c04086181013/cordless-finishing-hair-trimmer-professional-barber-shop-hair-clipper-beard-trimer-for-men-usb-hair-cutter.jpg_q50.jpg',
        star: 5,
        rating: 5
    }
];

const ProfessionalBody = props => {

    return (
        <div className='service-body-background'>
            <div className='professional_optioon'>
                <ProfessionalOption />
            </div>
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
