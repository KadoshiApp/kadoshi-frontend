import React from "react";
// import Popup from 'reactjs-popup';

import Auth from '../../Auth.config';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { viewProfessional } from '../../redux/Professionals/professionals.actions'
import { toggleAuthModal } from '../../redux/loading/loading.action'
import ServiceProp from '../serviceProp/serviceProp'
// import { Input, InputGroup, Stack } from "@chakra-ui/core";
import ButtonBig from '../buttonBig/buttonBig';

const comments = [
	{
		author: "Tunde Alabi",
		rating: 2,
		date: "(22 / 4 / 2020)",
		comment:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aut, temporibus at, dolorem officiis sed voluptas debitis harum quidem nostrum ipsam magnam enim esse iure veritatis repudiandae nulla exercitationem sunt odit dolores sint. Magnam quos ducimus, necessitatibus voluptas consectetur voluptatum.",
	},
	{
		author: "Ukutu Edomba",
		rating: 4,
		date: "(15 / 5 / 2020)",
		comment:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aut, temporibus at, dolorem officiis sed voluptas debitis harum quidem nostrum ipsam magnam enim esse iure veritatis repudiandae nulla exercitationem sunt odit dolores sint. Magnam quos ducimus, necessitatibus voluptas consectetur voluptatum.",
	},
];

const ServiceComment = ({data}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  

  const show = (user) => {
      if (user && Auth.getToken()) {
          history.push('/services')
          dispatch(viewProfessional(user))
      } else {
          dispatch(toggleAuthModal())
      }
  }

  return (
    <div className="service_comment_container">
      <div className="comment_topic">Comments</div>
      <hr className="horiz" />
      {comments.map((comment, index) => (
        <ServiceProp
          key={index}
          rating={comment.rating}
          author={comment.author}
          date={comment.date}
          comment={comment.comment}
        />
      ))}
        <div className="service_button">
          <ButtonBig caption='Add comments' />
          </div>
      {/* <Stack>
        <InputGroup size="sm">
          <Input placeholder="Add your own comment" />
          {/* <InputRightAddon children="COMMENT" background="#fb7346"/> */}
        {/* </InputGroup>
          </Stack> */}
          <div className="service___button"  onClick={() => show(data.userSlug)}>
          <ButtonBig caption='Back' />
          </div>
    </div>
  );
};
export default ServiceComment;
