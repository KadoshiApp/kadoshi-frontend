import React from 'react'
import {
	AiOutlineInstagram,
	AiFillLinkedin,
	AiFillFacebook,
    AiOutlineTwitter,
    
} from "react-icons/ai";
import { Link } from 'react-router-dom';

import './footer.scss'

export const FooterThin = () => {
    return (
        <div className='footer__thin'>
            All Rights Reserved. Kadoshi.com
        </div>
    )
}


export const FooterWide = () => {
    return (
        <div className='footer__wide_container'>
            <div className="footer__wide">
                <div className="footer__wide_copy">Copyright &#169; 2020</div>
                <div className="footer__wide_head"> Kadoshi.<span>com</span></div>
                <div className='footer__wide_nav'>
                    <div className="footer__wide_link">
                        <Link to='/'> <AiOutlineInstagram color='#f87e59' /> </Link>
                    </div>
                    <div className="footer__wide_link">
                        <Link to='/'> <AiFillLinkedin color='#f87e59' /> </Link>
                    </div>
                    <div className="footer__wide_link">
                        <Link to='/'> <AiFillFacebook color='#f87e59' /> </Link>
                    </div>
                    <div className="footer__wide_link">
                        <Link to='/'> <AiOutlineTwitter color='#f87e59' /> </Link>
                    </div>
                </div>
            </div>
        </div>
	);
}
