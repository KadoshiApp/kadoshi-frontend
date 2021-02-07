import React from 'react';
import { useSelector } from 'react-redux'

import ProfessionalOption from '../professionalOption/ProfessionalOption';
import ProfessionalProfile from '../professionals-profile/ProfessionalProfile';

import './professionalBody.scss';

const ProfessionalBody = ({values, change, clicked}) => {
    const professionalsArr = useSelector((state) => state.professionalReducer.professions);
    console.log(professionalsArr)

    return (
        <div className='service-body-background'>
            <div className='professional_optioon'>
                <ProfessionalOption values={values} change={change} clicked={clicked} />
            </div>
            <div className='professional-view'>Available Professonals</div>
            <div className='professional-data'>
            {professionalsArr.map((data, index)=> (
            <ProfessionalProfile data={data} key={index}/>
            ))}
            </div>
                </div>
    )
}

export default ProfessionalBody;
