import React from "react";
import ServiceProp from "../serviceProp/serviceProp";
import { Input, InputGroup, InputRightAddon, Stack } from "@chakra-ui/core";
import ButtonBig from '../buttonBig/buttonBig';
const comments = [
  {
    author: "Tunde Alabi",
    date: "(22 / 4 / 2020)",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aut, temporibus at, dolorem officiis sed voluptas debitis harum quidem nostrum ipsam magnam enim esse iure veritatis repudiandae nulla exercitationem sunt odit dolores sint. Magnam quos ducimus, necessitatibus voluptas consectetur voluptatum.",
  },
  {
    author: "Ukutu Edomba",
    date: "(15 / 5 / 2020)",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas aut, temporibus at, dolorem officiis sed voluptas debitis harum quidem nostrum ipsam magnam enim esse iure veritatis repudiandae nulla exercitationem sunt odit dolores sint. Magnam quos ducimus, necessitatibus voluptas consectetur voluptatum.",
  },
];

const ServiceComment = () => {
  return (
    <div className="service_comment_container">
      <div className="comment_topic">Comments</div>
      <hr className="horiz" />
      {comments.map((comment, index) => (
        <ServiceProp
          key={index}
          author={comment.author}
          date={comment.date}
          comment={comment.comment}
        />
      ))}

      <Stack>
        <InputGroup size="lg">
        <Input placeholder="Add your own comment" />
        <InputRightAddon children="COMMENT" background="#fb7346"/>
        </InputGroup>
          </Stack>
          <div className="service_button">
          <ButtonBig caption='Back' />
          </div>
    </div>
  );
};
export default ServiceComment;
