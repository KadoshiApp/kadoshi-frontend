import React from 'react';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './footer.scss';

export const FooterWide = () => {
  return (
    <div className="footer__wide_container">
      <div className="footer__wide">
        <div className="footer__wide_copy gray">
          &#169; 2020 Kadoshi All rights reserved{' '}
        </div>
        <div>
          <Link to="/">
            <span className="gray"> Terms of Service</span>
          </Link>
        </div>

        <div className="footer__wide_nav">
          <div className="footer__wide_link">
            <Link to="/">
              <AiOutlineInstagram color="rgb(158, 158, 158)" />
            </Link>
          </div>
          <div className="footer__wide_link">
            <Link to="/">
              <AiFillLinkedin color="rgb(158, 158, 158)" />
            </Link>
          </div>
          <div className="footer__wide_link">
            <Link to="/">
              <AiFillFacebook color="rgb(158, 158, 158)" />
            </Link>
          </div>
          <div className="footer__wide_link">
            <Link to="/">
              <AiOutlineTwitter color="rgb(158, 158, 158)" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
