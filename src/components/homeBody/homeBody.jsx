import React, { Fragment } from 'react';
import './homeBody.scss';
import { Link } from 'react-router-dom';

const HomeBody = () => {
  return (
    <Fragment>
      <div className="home__body_one">
        <div className="home__body_one_container steps">
          <div className="home__body_onestep ">
            Your Phone + our Website = a simpler life
          </div>
          <div>
            <p>
              We know you are always busy and need help with some task. We'll provide top
              notch service for you. No stress
            </p>
            <Link to="/account">
              <span>Open an account in minutes </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="home__body_two">
        <div className="home__body_two_container steps">
          <div className="home__body_twostep">You get the best money can offer</div>
          <p>
            We carefully recruit our professionals.You'll get the professional that fit
            your need.
          </p>
        </div>
      </div>

      <div className="home__body_one _body_three">
        <div className="home__body_one_container  steps">
          <div className="home__body_onestep _stepthree">
            Save time and as you rely on us.
          </div>
          <p>
            We know how hard it is to find a competent professional. Just let us worry
            that.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBody;
