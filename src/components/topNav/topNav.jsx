import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import Auth from '../../Auth.config';

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/login/login.actions';
import { successMessage } from '../../redux/message/message.action';

import './topNav.scss';
import Logo from '../Logo/Logo';
import ButtonSmall from '../buttonSmall/buttonSmall';

const TopNav = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showMobileNavList, setShowMobileNavList] = useState(false);
  const dispatch = useDispatch();
  const profUser = useSelector((state) => state.loginReducer?.profData?.userSlug);
  const history = useHistory();

  const logout = () => {
    dispatch(logoutUser());
    dispatch(successMessage('Signout Successful!'));
    history.push('/');
  };

  let toggle = <div></div>;
  if (showDrop) {
    if (Auth.isAuthenticated()) {
      toggle = (
        <div className="top__nav_toggle">
          {profUser && (
            <div>
              {' '}
              <NavLink exact to="/profile">
                Update Profile
              </NavLink>{' '}
            </div>
          )}
          <div onClick={logout}> Sign Out </div>
        </div>
      );
    } else {
      toggle = (
        <div>
          <p> nothing</p>
        </div>
      );
    }
  }
  const handleClick = () => {
    history.push('/signIn');
  };

  return (
    <div className="top__nav">
      <Logo />
      <div className="top__nav_links">
        <NavLists />
      </div>
      <div>
        {Auth.isAuthenticated() ? (
          <div onClick={() => setShowDrop(!showDrop)} className="top__nav_drop">
            <FaUserAlt color="rgb(158, 158, 158)" />
            {toggle}
          </div>
        ) : (
          <ButtonSmall caption="Log in" clicked={handleClick} />
        )}
      </div>
      <div className="hamburger">
        {!showMobileNavList ? (
          <GiHamburgerMenu
            size="2rem"
            onClick={() => setShowMobileNavList(!showMobileNavList)}
          />
        ) : (
          <MdCancel
            size="2rem"
            onClick={() => setShowMobileNavList(!showMobileNavList)}
          />
        )}
        <div className={`hamburger-list ${showMobileNavList && ' hamburger-list-show'}`}>
          <NavLists />
        </div>
      </div>
    </div>
  );
};

export default TopNav;

const NavLists = () => {
  return (
    <>
      <NavLink exact to="/">
        Home
      </NavLink>
      {/* {Auth.isAuthenticated() && ( */}
      <NavLink exact to="/services">
        Services
      </NavLink>
      {/* )} */}
      <NavLink exact to="/contact">
        Contact
      </NavLink>
    </>
  );
};
