import React from 'react';
import TopNav from '../../components/topNav/topNav';
import AboutBody from '../../components/aboutBody/aboutBody';
import AboutCaption from '../../components/aboutCaption/aboutCaption';

import { FooterThin, FooterWide } from '../../components/footer/footer';

import './aboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about_body_container">
      <div className="about_contain">
        <div className="about_head">
          <TopNav />
          <AboutCaption />
        </div>
        <AboutBody />
        <FooterWide />
      </div>
    </div>
  );
};

export default AboutPage;
