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
            Nigeria
            Phone 08103642970
            kadoshiservices1@gmail.com
        </div>
        </div>
    )
}

export default ContactOffice;
 