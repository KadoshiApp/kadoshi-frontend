import React from 'react';
import './buttonSmall.scss';

export const ButtonSmall = ({ clicked, caption, roundEdge, light, plain }) => {
	return (
			<button
				onClick={() => clicked()}
				className={`btn__small ${roundEdge && "_smallround"} ${
					light && "_smalllight"
				} ${plain && "_smallplain"}`}
			>
				{caption}
			</button>
	);
};

export default ButtonSmall;
