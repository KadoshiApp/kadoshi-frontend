import React from "react";
import TopNav from "../../components/topNav/topNav";
import AboutBody from "../../components/aboutBody/aboutBody";
import AboutCaption from "../../components/aboutCaption/aboutCaption";

import { FooterThin, FooterWide } from "../../components/footer/footer";

import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <div>
      <div className="about_head">
        <TopNav />
        <AboutCaption />
      </div>
      <AboutBody />
      <FooterWide />
      <FooterThin />
    </div>
  );
};

export default AboutPage;
