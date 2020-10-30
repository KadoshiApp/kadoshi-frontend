import React from 'react'
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
                    <div className="footer__wide_link">link</div>
                    <div className="footer__wide_link">link</div>
                    <div className="footer__wide_link">link</div>
                    <div className="footer__wide_link">link</div>
                    <div className="footer__wide_link">link</div>
                </div>
            </div>
        </div>
	);
}
