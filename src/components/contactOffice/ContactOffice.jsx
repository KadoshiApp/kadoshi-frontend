import React from 'react';

import './contactOffice.scss';

const ContactOffice = props => {
    return (
        <div className='contact-office-header'>
        <div className='contact-office'>
            <div className='icon'>{props.icon}</div>
            <div className='title'>{props.title}</div>
        </div>
        <div className='lorem'>
        No 27 Etang Obuli crescent ,Utako Abuja.
            Nigeria<br/>
            Phone 07017222975<br/>
            kadoshiservices1@gmail.com
        </div>
        </div>
    )
}

export default ContactOffice;
 