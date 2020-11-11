import React from 'react';
import { Select } from "@chakra-ui/core";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import './professionalOption.scss';

function ProfessionalOption() {
	return (
		<div className='professional-option'>
			<div className='text-list'>Sort Service Listing</div>
			<div className='option-_header'>
			<Select placeholder='Select Product Category' variant='outline' marginRight='30px'>
                                    <option value='Fashion Design'> Fashion Design </option>
                                    <option value='Hair Styling'> Hair Styling </option>
                                    <option value='Building'> Building </option>
                                    <option value='Decoration'> Decoration </option>
                                    <option value='Catering'> Catering </option>
                                    <option value='Tech/IT'> Tech/IT </option>
                                    <option value='Transport'> Transport </option>
                                    <option value='Engineering'> Engineering </option>
                                    <option value='Other'> Transport </option>
                                </Select>
                                <Select placeholder='Select Location'      variant='outline'>
                                    <option value='lagos'> Lagos</option>
                                    <option value='abuja'> Abuja </option>
                                    <option value='porthacourt'> PortHacourt </option>
                                </Select>
		</div>
		<div className='professional__button'>
                        <ButtonSmall caption='go!' roundEdge />
                    </div>	
		</div>
	)
}

export default ProfessionalOption;
