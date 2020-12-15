import React, { useState } from "react";
import "./servicesPage.scss";
import TopNav from "../../components/topNav/topNav";
import { FooterThin, FooterWide } from "../../components/footer/footer";

import { AiOutlineComment } from "react-icons/ai";
import ViewModal from "../../components/viewModal/viewModal";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal } from "../../redux/loading/loading.action";
import ButtonBig from "../../components/buttonBig/buttonBig";
import { errorMessage } from "../../redux/message/message.action";
import { loginComment } from "../../redux/comment/comment.action";
import ServicesHead from "../../components/servicesHead/servicesHead";
import ServiceBody from "../../components/serviceBody/serviceBody";
import ServiceCarousel from "../../components/serviceCarousel/serviceCarousel";
import ServiceComment from "../../components/serviceComment/serviceComment";
import { Textarea } from "@chakra-ui/core";

const ServicesPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.loadingReducer.modal);
  const initialState = {
    comment: ' ',
  };
  const [ inputData, setInputData ] = useState(initialState)
  const { comment } = inputData

  const handleInputs = (e) => {
    setInputData(e.target.value);
  }
  const onSubmit = () => {
    if (!comment) {
      return dispatch(errorMessage("Fill all fields"))
    }
    if (comment) {
      return dispatch(loginComment({comment}))
    }
  }

  const closeModal = () => {
    dispatch(toggleAuthModal());
  };

  let authModal = <div> </div>;
  if (modal) {
    authModal = (
      <ViewModal modal={modal} showModal={closeModal}>
        <div className="professional__authmodal">
          <div>
            {" "}
            <AiOutlineComment />{" "}
          </div>
          <div> Rate Proffesional</div>
          <div>
            <ReactStars
              count={5}
              onChange={handleInputs}
              size={40}
              activeColor="#fa8964"
              classNames="react_star"
              name='rating'
              edit={true}
            />
          </div>

          <Textarea
            className="com"
            value={comment}
            isInvalid
            placeholder="Add Comment"
            onChange={handleInputs}
            name='comment' />
          <ButtonBig caption="Add comments" clicked={onSubmit} />
        </div>
      </ViewModal>
    );
  }

  console.log(modal, "modal");

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
        {authModal}
        <ServiceComment />
      </div>
      <div className="carousel__footer">
        <FooterWide />
        <FooterThin />
      </div>
    </div>
  );
};

export default ServicesPage;
