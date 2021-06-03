import React from 'react';
import { useHistory } from 'react-router-dom';

import ButtonSmall from '../buttonSmall/buttonSmall';
import background1 from '../../images/workers.jpg';

import './homeCaption.scss';

const HomeCaption = () => {
  const history = useHistory();

  const hireNow = () => {
    history.push('/client');
  };

  return (
    <div className="home__caption">
      <div>
        <div className="home__caption_main">
          In-Demand <br /> Service Professionals
        </div>
        <div className="home__caption_aside"> at your fingertips! </div>

        <div className="home__caption_btn">
          <div>
            <ButtonSmall caption="Hire Now!" clicked={hireNow} />
          </div>
        </div>
      </div>
      <div className="home-caption-img">
        <img src={background1} alt='' />
      </div>
    </div>
  );
};

export default HomeCaption;
