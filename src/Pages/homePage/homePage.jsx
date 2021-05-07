import React from 'react';
import { useHistory } from 'react-router-dom';

import TopNav from '../../components/topNav/topNav';
import HomeCaption from '../../components/homeCaption/homeCaption';
import HomeBody from '../../components/homeBody/homeBody';

import ButtonBig from '../../components/buttonBig/buttonBig';

import { FooterWide } from '../../components/footer/footer';

import './homePage.scss';

const HomePage = () => {
  return (
    <div>
      <div className="home__head">
        <TopNav />
        <HomeCaption />
      </div>
      <HomeBody />
      <FooterWide />
    </div>
  );
};

export default HomePage;
