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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit ullam dicta  
            quia amet dolore porro fugit magnam minima facilis illo aliquamtotam id ab,  
            reprehenderit eum accusamus, expedita consectetur!
        </div>
        </div>
    )
}

export default ContactOffice;
 