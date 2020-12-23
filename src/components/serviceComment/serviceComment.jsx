import React from "react";
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from '../../redux/loading/loading.action'
import ServiceProp from '../serviceProp/serviceProp'
import ButtonBig from '../buttonBig/buttonBig';

const ServiceComment = ({ comments }) => {
  const dispatch = useDispatch()

  const addComment = () => {
    dispatch(toggleAuthModal());
  }

  return (
    <div className="service_comment_container">
      <div className="comment_topic">Comments</div>
      <hr className="horiz" />
      {comments.map(comment => (
        <ServiceProp
          key={comment._id}
          rating={comment?.rating || 0}
          author={comment?.author || 'Anonymous'}
          date={moment(+comment.date_created).format("YYYY-MM-DD")}
          comment={comment.comment}
        />
      ))}
        <div className="service_button">
        <ButtonBig caption='Add comments' clicked={addComment} />
          </div>
    </div>
  );
};
export default ServiceComment;
