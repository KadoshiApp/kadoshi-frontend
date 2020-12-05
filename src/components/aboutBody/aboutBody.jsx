import React from "react";

import ButtonBig from "../buttonBig/buttonBig";

import "./aboutBody.scss";

const AboutBody = () => {
  return (
    <div className="about_body_container">
      <div className="about_body">
        <p>
        "kADOSHIServices.com" was born out of the need for satisfaction without stress. 
          It is a platform for interaction between vendors/service providers and prospective clients/customers. 
          We aim to provide stress free services through professional artisians to our valued clients,
          from the comfort of their homes.
          Simply register and enjoy 24/7 service delivery from your mobile devices
          to your doorsteps .
        </p>
        <div className="home__head_btn">
          <ButtonBig caption="get started today!" />
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
