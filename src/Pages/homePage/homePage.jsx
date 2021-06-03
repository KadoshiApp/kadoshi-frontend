import React from 'react';

import TopNav from '../../components/topNav/topNav';
import HomeCaption from '../../components/homeCaption/homeCaption';
import HomeBody from '../../components/homeBody/homeBody';

import { FooterWide } from '../../components/footer/footer';

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
