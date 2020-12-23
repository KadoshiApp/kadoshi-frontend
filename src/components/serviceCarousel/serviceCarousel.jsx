import React from "react";
import "./serviceCarousel.scss";

const ServiceCarousel = ({images}) => {
  return (
		<div className="carousel_container">
			{images ?
				images.map((image) => (
					<div className="carousel">
						<img src={image} alt='works' />
					</div>
				)) : <div style={{
          fontSize: '14px',
          color: '#444',
          textAlign: 'center',
          width: '100%'
        }}> Images of Completed Work Shows here. </div>}
    </div>
	);
};

export default ServiceCarousel;
