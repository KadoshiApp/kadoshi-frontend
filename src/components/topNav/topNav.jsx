import React from 'react';
import { NavLink } from 'react-router-dom'

import './topNav.scss';


const TopNav = () => {
    return (
        <div className='top__nav'>
            <div className='top__nav_head'> Kadoshi </div>
            <div className='top__nav_links'>
                <NavLink exact to='/' activeClassName='selected'> HOME </NavLink>
                <NavLink exact to='/services' activeClassName=''> SERVICES </NavLink>
                <NavLink exact to='/about' activeClassName=''> ABOUT </NavLink>
                <NavLink exact to='/contact' activeClassName=''> CONTACT </NavLink>
                <NavLink exact to='/signIn' activeClassName=''> 
                    {/* <Avatar size='2xs' name='John Doe' src='' /> */}
                    User
                </NavLink>
            </div>
        </div>
    )
}


export default TopNav;