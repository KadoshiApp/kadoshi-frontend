import React from 'react';
import { useSelector } from 'react-redux';

import ProfessionalOption from '../professionalOption/ProfessionalOption';

import './professionalBody.scss';
import ProfessionalCard from '../professionalCard/professionalCard';

const ProfessionalBody = ({ values, change, clicked }) => {
  const professionalsArr = useSelector((state) => state.professionalReducer.professions);

  return (
    <div className="service-body-background">
      <div className="professional_optioon">
        <ProfessionalOption values={values} change={change} clicked={clicked} />
      </div>
      <div className="professional-view">Available Professionals </div>
      <div className="professional-data">
        {professionalsArr.map((data) => (
          // <ProfessionalProfile data={data} key={index} />
          <ProfessionalCard data={data} key={data.fullName} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalBody;
