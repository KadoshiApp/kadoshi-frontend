import React from 'react'
import './serviceProp.scss';

const ServiceProp = ({ author, date, comment }) => {
    return (
        <div>
            <div className="service_prop"> {author}{date} </div>
            <div className="service_comment"> {comment} <hr className="lighter"/></div> 
        </div>
    )
}

export default ServiceProp;