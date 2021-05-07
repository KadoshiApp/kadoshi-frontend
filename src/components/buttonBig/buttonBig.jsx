import React from 'react';
import './buttonBig.scss';

export const ButtonBig = ({ clicked, caption, plain, plainBig }) => {
  return (
    <button
      onClick={clicked ? () => clicked() : null}
      className={` ${plain && '_bigplain'} ${plainBig && '_plainBig btn__big'}`}
    >
      {caption}
    </button>
  );
};

export default ButtonBig;
