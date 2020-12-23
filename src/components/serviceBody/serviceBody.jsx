import React from "react";
import ProffesionalRating from "../serviceRating/serviceRating";
import "./serviceBody.scss";

const ServiceBody = ({data}) => {
  return (
    <div className="service_body_container">
      <div className="service_body_p">VEIW PROFFESSIONAL</div>
      <ProffesionalRating data={data} />
    </div>
  );
};

export default ServiceBody;
