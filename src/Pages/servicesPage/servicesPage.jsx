import React from "react";
import "./servicesPage.scss";
import TopNav from "../../components/topNav/topNav";
import { FooterThin, FooterWide } from "../../components/footer/footer";

import ServicesHead from "../../components/servicesHead/servicesHead";
import ServiceBody from "../../components/serviceBody/serviceBody";
import ServiceCarousel from "../../components/serviceCarousel/serviceCarousel";
import ServiceComment from "../../components/serviceComment/serviceComment";

const ServicesPage = () => {
  return (
    <div className="services_body">
      <div className="services_body_cont"> 
        <TopNav />
        <ServicesHead />
      </div>
      <ServiceBody />
      <div className="service_basic_info_container">
        <div className="service_basic_info">
          <div> BASIC INFO </div>
          <hr className="horiz" />
          <div className="service_about">
            <div>ABOUT</div>
            <div className="service_basic_info_about">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit perspiciatis nemo nam ex iusto, natus eligendi
              asperiores illum corporis fugit accusantium quibusdam libero
              laborum quisquam aperiam quod cum expedita delectus molestias
              deleniti sed quas, maiores omnis esse. Officiis cupiditate
              expedita, odio deleniti ex animi voluptatibus eos architecto non
              repellat tenetur, vitae repellendus temporibus dicta iste fuga
              qui. Nihil voluptatibus quas amet dolor. Veritatis, adipisci
              fugiat id architecto perspiciatis cum sed minima iure aliquam quam
              ipsum harum laborum, tempore error tempora! Dignissimos, harum cum
              similique magni aliquam distinctio maxime debitis placeat cumque
              adipisci earum, ullam non iste enim necessitatibus ad sequi iusto
              dolore aspernatur voluptatibus blanditiis officiis quaerat,
              dolorem doloremque! Libero.
            </div>
          </div>
          <hr className="horiz" />
        </div>
        <div className="carousel_top">PREVIOUS WORK</div>

        <ServiceCarousel />
        <ServiceComment />
      </div>

      <FooterWide />
      <FooterThin />
    </div>
  );
};

export default ServicesPage;
