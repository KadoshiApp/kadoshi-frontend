import React from 'react';
import './buttonBig.scss';

export const ButtonBig = ({ clicked, caption, plain, plainBig }) => {
	return (
		<button
			onClick={clicked ? () => clicked() : null}
			className={`btn__big ${plain && "_bigplain"} ${plainBig && "_plainBig"}`}
		>
			{caption}
		</button>
	);
};

export default ButtonBig;
