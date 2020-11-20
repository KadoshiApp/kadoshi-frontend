import React from 'react'
import ReactStars from "react-rating-stars-component";

import './serviceProp.scss';

const ServiceProp = ({ author, date, comment, rating }) => {
    return (
        <div>
            <div className="service_prop"> 
                {author}
                {date} 
                <span> 
                    <ReactStars
                        count={5}
                        value={rating}
                        size={20}
                        edit={false}
                        color='grey'
                        activeColor='#fa8964'
                        half={true}
                        classNames="react_star"
                        />
                </span>
            </div>
            <div className="service_comment"> {comment} <hr className="lighter"/></div> 
        </div>
    )
}

export default ServiceProp;