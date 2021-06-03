import React from 'react';
import Auth from '../../Auth.config';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from '../../redux/loading/loading.action';
import ReactStars from 'react-rating-stars-component';

import './professionalCard.scss';

const ProfessionalCard = ({
  data: { fullName, profession, profilePhoto, userSlug, ratingAvg },
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const imgUrl =
    profilePhoto ||
    'https://res.cloudinary.com/kadoshi/image/upload/v1608798891/mpg5arv2cdh3vl1vk89c.png';

  const handleRoute = () => {
    if (userSlug && Auth.getToken()) {
      history.push(`/professional/${userSlug}`);
    } else {
      dispatch(toggleAuthModal());
    }
  };

  return (
    <button as="link" onClick={handleRoute} class="professional-card">
      <div>
        <img src={imgUrl} alt='' />
      </div>

      <div className="professional-card-data">
        <p className="name">{fullName}</p>
        <p className="profession">{profession || 'no Profession'}</p>
        <ReactStars
          count={5}
          size={20}
          activeColor="#fa8964"
          classNames="react_star"
          edit={false}
          value={ratingAvg}
        />
      </div>
    </button>
  );
};

export default ProfessionalCard;
