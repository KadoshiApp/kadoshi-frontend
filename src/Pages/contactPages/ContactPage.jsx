import React from 'react';
import TopNav from '../../components/topNav/topNav';
import ContactCaption from '../../components/contactCaption/ContactCaption';
import ContactBody from '../../components/contactBody/ContactBody';
import ButtonBig from '../../components/buttonBig/buttonBig';
import ContactOffice from '../../components/contactOffice/ContactOffice';
import Header from '../../components/image.svg/header.svg';
import { FooterThin, FooterWide } from '../../components/footer/footer';

import './contactPage.scss';

const ContactPage = () => {
  const icona = <img src={Header} alt="header" />;
  return (
    <div>
      <div className="contact-page">
        <TopNav />
        <ContactCaption />
      </div>
      <ContactBody />
      <div className="contact_office">
        <ContactOffice icon={icona} title=" Head Office" />
        <ContactOffice icon={icona} title=" Head Office" />
      </div>
      <div className="contact-button">
        <ButtonBig caption="go home" />
      </div>
      <FooterWide />
    </div>
  );
};

export default ContactPage;
