import React from 'react';
import './professionalButton.scss';

const ProfessionalButton = props => {
	return (
		<div className='button-header'>
			<div className='values'>{props.values}</div>
		</div>
	)
}

export default ProfessionalButton;
