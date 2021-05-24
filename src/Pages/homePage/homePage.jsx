import React from 'react';
import { useHistory } from 'react-router-dom';

import TopNav from '../../components/topNav/topNav';
import HomeCaption from '../../components/homeCaption/homeCaption';
import HomeBody from '../../components/homeBody/homeBody';

import ButtonBig from '../../components/buttonBig/buttonBig';

import { FooterWide } from '../../components/footer/footer';
import background from '../../images/workers.eps';
import background1 from '../../images/workers.jpg';

import './homePage.scss';

const HomePage = () => {
  return (
    <div>
      <TopNav />
      {/* <div className="home__head" style={{ backgroundImage: `url(${background1})` }}> */}
      <div className="home__head">
        <HomeCaption />
      </div>
      <HomeBody />
      <FooterWide />
    </div>
  );
};

export default HomePage;
