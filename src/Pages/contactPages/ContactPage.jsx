import React from 'react';
import TopNav from '../../components/topNav/topNav';
import ContactCaption from '../../components/contactCaption/ContactCaption';
import ContactBody from '../../components/contactBody/ContactBody';
import ButtonBig from '../../components/buttonBig/buttonBig';
import ContactOffice from '../../components/contactOffice/ContactOffice';
import Header from '../../components/image.svg/header.svg';
import { FooterWide } from '../../components/footer/footer';

import './contactPage.scss';

const ContactPage = () => {
  const icon = <img src={Header} alt="header" />;
  return (
    <div>
      <TopNav />
      <ContactBody />
      <div className="contact_office">
        <ContactOffice icon={icon} title=" Head Office" />
      </div>
      <div className="contact-button">
        <ButtonBig caption="go home" />
      </div>
      <FooterWide />
    </div>
  );
};

export default ContactPage;
