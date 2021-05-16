import React from 'react';
import { useHistory } from 'react-router-dom';

import ButtonSmall from '../buttonSmall/buttonSmall';
import ButtonBig from '../buttonBig/buttonBig';

import './homeCaption.scss';

const HomeCaption = () => {
  const history = useHistory();

  const hireNow = () => {
    history.push('/client');
  };

  const joinNow = () => {
    history.push('/signUp');
  };

  return (
    <div className="home__caption">
      <div className="home__caption_main">
        {' '}
        In-Demand <br /> Service Professionals{' '}
      </div>
      <div className="home__caption_aside"> at your fingertips! </div>
      <div className="home__caption_btn">
        <div>
          <ButtonSmall caption="Hire Now!" clicked={hireNow} />
        </div>
        {/* <div>
                    <ButtonBig 
                        caption='Join as a Professional' 
                        plain
                        clicked={joinNow}
                    />
                </div> */}
      </div>
    </div>
  );
};

export default HomeCaption;
