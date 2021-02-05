import React, { useState } from "react";
import "./serviceRating.scss";
import ReactStars from "react-rating-stars-component";
import ButtonSmall from "../buttonSmall/buttonSmall";

const ProffesionalRating = ({data}) => {
  const [phone, setPhone] = useState(false)
  const [location, setLocation] = useState(false);
  const imageUrl = data?.image || 'https://res.cloudinary.com/kadoshi/image/upload/v1608798891/mpg5arv2cdh3vl1vk89c.png'
  return (
    <div className="service_rating_container">
      <div className="service_rating">
      <img src={imageUrl} alt="constructon"/>
      </div>
      <div className="service_star">
        <div className="professional_name"> {data?.fullName} </div>
        <div className="professional_prof"> {data?.profession} </div>
        <ReactStars
          count={5}
          value={data?.ratingAvg}
          size={34}
          edit={false}
          color='grey'
          activeColor='#fa8964'
          half={true}
        />
        <div className="generated_number"> Work Experience: {data?.experience} Years </div>
        <div className="btn_shift_center">
        <span className="star_bottom_left">
          <ButtonSmall caption={ phone ? `${data?.phoneNumber}` : 'Phone' }
            plain clicked={() => setPhone(!phone)} />
        </span>
        <span className="star_bottom_right">
          <ButtonSmall caption={ location ? `${data?.state}` : 'Location' }
            plain clicked={() => setLocation(!location)} />
        </span>
        </div>
      </div>
    </div>
  );
};
export default ProffesionalRating;
