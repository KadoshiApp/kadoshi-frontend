import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import Auth from '../../Auth.config'

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/login/login.actions'
import { successMessage } from '../../redux/message/message.action'

import './topNav.scss';


const TopNav = () => {
    const [ showDrop, setShowDrop ] = useState(false);
    const dispatch = useDispatch();
    const profUser = useSelector((state) => state.loginReducer?.profData?.userSlug);
    const history = useHistory();

    const logout  = () => {
        dispatch(logoutUser());
        dispatch(successMessage('Signout Successful!'));
        history.push('/');
    }
 
    let toggle = <div></div>
    if (showDrop) {
        if (Auth.isAuthenticated() === true) {
            toggle = (
                <div className='top__nav_toggle'>
                    { profUser && <div> <NavLink exact to='/profile'>UPDATE PROFILE</NavLink> </div> }
                    <div onClick={logout}> SIGN OUT </div>
                </div>
            )
        } else {
            toggle = (
                <div className='top__nav_toggle'>
                    <div> <NavLink exact to='/signIn'> LOGIN </NavLink> </div>
                    <div> <NavLink exact to='/account'> SIGN UP </NavLink> </div>
                </div>
            )
        }
    }

    return (
        <div className='top__nav'>
            <div className='top__nav_head' ><NavLink exact to='/'>Kadoshi</NavLink></div>
            <div className='top__nav_links'>
                <NavLink exact to='/'> HOME </NavLink>
                <NavLink exact to='/services'> SERVICES </NavLink>
                <NavLink exact to='/about'> ABOUT </NavLink>
                <NavLink exact to='/contact'> CONTACT </NavLink>
                <div onClick={() => setShowDrop(!showDrop)} className='top__nav_drop'> 
                    <FaUserAlt color=' #f87e59' />
                    {toggle}
                </div>
            </div>
        </div>
    )
}


export default TopNav;