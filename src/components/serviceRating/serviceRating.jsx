import React from "react";
import "./serviceRating.scss";
import ReactStars from "react-rating-stars-component";
import ButtonSmall from "../buttonSmall/buttonSmall";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const ProffesionalRating = () => {
  return (
    <div className="service_rating_container">
      <div className="service_rating">
      <img src="../construction4.jpeg" alt="constructon"/>
      </div>
      <div className="service_star">
        <div className="professional_name">Micheal Adelegan</div>
        <div className="professional_prof">Carpenter</div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={54}
          activeColor="#fa8964"
        />
        <div className="generated_number">Rating: 4.1</div>
        <span className="star_bottom_left">
                  <ButtonSmall caption="VEIW PHONE"
                      plain />
        </span>
        <span className="star_bottom_right">
                  <ButtonSmall caption="VEIW ADDRESS"
                      plain />
        </span>
      </div>
    </div>
  );
};
export default ProffesionalRating;
