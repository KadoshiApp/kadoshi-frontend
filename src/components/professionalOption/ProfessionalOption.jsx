import React from 'react';
import { Select } from "@chakra-ui/core";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import './professionalOption.scss';

function ProfessionalOption({ values, change, clicked }) {
	return (
		<div className="professional-option">
			<div className="text-list">Sort Service Listing</div>
			<div className="option-_header">
				<Select
					placeholder="Select Product Category"
					variant="outline"
					marginRight="10px"
					value={values.product}
					onChange={change}
					name='product'
				>
					<option value="Fashion Design"> Fashion Design </option>
					<option value="Hair Styling"> Hair Styling </option>
					<option value="Building"> Building </option>
					<option value="Decoration"> Decoration </option>
					<option value="Catering"> Catering </option>
					<option value="Tech/IT"> Tech/IT </option>
					<option value="Transport"> Transport </option>
					<option value="Engineering"> Engineering </option>
					<option value="Other"> Transport </option>
				</Select>
				<Select placeholder="Select Location" variant="outline" value={values.location} onChange={change} name='location'>
					<option value="Abuja"> Abuja </option>
					<option value="Abia"> Abia </option>
					<option value="Adamawa"> Adamawa </option>
					<option value="Akwa Ibom"> Akwa Ibom </option>
					<option value="Anambra"> Anambra </option>
					<option value="Bauchi"> Bauchi </option>
					<option value="Bayelsa"> Bayelsa </option>
					<option value="Benue"> Benue </option>
					<option value="Borno"> Borno </option>
					<option value="Cross River"> Cross River </option>
					<option value="Delta"> Delta </option>
					<option value="Ebonyi"> Ebonyi </option>
					<option value="Edo"> Edo </option>
					<option value="Ekiti"> Ekiti </option>
					<option value="Enugu"> Enugu </option>
					<option value="Gombe"> Gombe </option>
					<option value="Imo"> Imo </option>
					<option value="Jigawa"> Jigawa </option>
					<option value="Kaduna"> Kaduna </option>
					<option value="Kano"> Kano </option>
					<option value="Katsina"> Katsina </option>
					<option value="Kebbi"> Kebbi </option>
					<option value="Kogi"> Kogi </option>
					<option value="Kwara"> Kwara </option>
					<option value="Lagos"> Lagos </option>
					<option value="Nasarawa"> Nasarawa </option>
					<option value="Niger"> Niger </option>
					<option value="Ogun"> Ogun </option>
					<option value="Ondo"> Ondo </option>
					<option value="Osun"> Osun </option>
					<option value="Oyo"> Oyo </option>
					<option value="Plateau"> Plateau </option>
					<option value="Rivers"> Rivers </option>
					<option value="Sokoto"> Sokoto </option>
					<option value="Taraba"> Taraba </option>
					<option value="Yobe"> Yobe </option>
					<option value="Zamfara"> Zamfara </option>
				</Select>
			</div>
			<div className="professional__button">
				<ButtonSmall caption="go!" roundEdge clicked={clicked} />
			</div>
		</div>
	);
}

export default ProfessionalOption;
