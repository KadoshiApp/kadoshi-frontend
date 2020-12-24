import React, { useState, useEffect } from "react";
import "./servicesPage.scss";
import TopNav from "../../components/topNav/topNav";
import { FooterThin, FooterWide } from "../../components/footer/footer";
import Auth from "../../Auth.config";

import { AiOutlineComment } from "react-icons/ai";
import ViewModal from "../../components/viewModal/viewModal";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal } from "../../redux/loading/loading.action";
import ButtonBig from "../../components/buttonBig/buttonBig";
import { errorMessage } from "../../redux/message/message.action";
import { viewProfessional } from "../../redux/Professionals/professionals.actions";
import { loginComment } from "../../redux/comment/comment.action";
import ServicesHead from "../../components/servicesHead/servicesHead";
import ServiceBody from "../../components/serviceBody/serviceBody";
import ServiceCarousel from "../../components/serviceCarousel/serviceCarousel";
import ServiceComment from "../../components/serviceComment/serviceComment";
import { Textarea } from "@chakra-ui/core";

const ServicesPage = ({ match }) => {
  const dispatch = useDispatch(); 
  const user = match.params.slug;
  const modal = useSelector((state) => state.loadingReducer.modal);
  const professionalData = useSelector((state) => state.professionalReducer.professionalData);

  useEffect(() => {
    if (user && Auth.getToken()) {
      dispatch(viewProfessional(user));
		}
  }, [user, dispatch])
  console.log(professionalData, 'data')

  const [ comment, setComment ] = useState('')
  const [ rating, setRating ] = useState(0);

  const ratingChanged = (newRating) => {
		setRating(newRating)
	};

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
						<AiOutlineComment />
					</div>
					<div> Rate Proffesional</div>
					<div>
						<ReactStars
							count={5}
							value={rating}
							onChange={ratingChanged}
							size={40}
							activeColor="#fa8964"
							classNames="react_star"
							name="rating"
							edit={true}
						/>
					</div>

					<Textarea
						className="com"
						value={comment}
						isInvalid
						placeholder="Add Comment"
						onChange={(e) => setComment(e.target.value)}
						name="comment"
					/>
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
      {professionalData && professionalData.userSlug === user && <>
      <ServiceBody data={professionalData} />
      <div className="service_basic_info_container">
        <div className="service_basic_info">
          <div> BASIC INFO </div>
          <hr className="horiz" />
          <div className="service_about">
            <div>ABOUT</div>
            <div className="service_basic_info_about">
              {professionalData?.about || <div style={{
                fontSize: '14px',
                color: '#444',
                textAlign: 'center',
                width: '85%',
                textTransform: 'capitalize'
              }}> {professionalData.fullName} Is Working on a Killer About. </div> }
            </div>
          </div>
          <hr className="horiz" />
        </div>
        <div className="carousel_top">PREVIOUS WORK</div>
        <ServiceCarousel images={professionalData?.images} />
        {authModal}
        <ServiceComment comments={professionalData?.comments} />
      </div>
      </>}
      <div className="carousel__footer">
        <FooterWide />
        <FooterThin />
      </div>
    </div>
  );
};

export default ServicesPage;
