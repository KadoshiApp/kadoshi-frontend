import React from 'react'
import { Icon, Input, InputGroup, InputLeftElement, Stack, Select, Textarea } from "@chakra-ui/core";
import { MdAccountBox } from "react-icons/md";

import './updateProfileInputs.scss';

const UpdateProfileInputs = ({ handleInputs, inputData }) => {
    const { full_name, comment, experience, category, location, email } = inputData
    
    return (
			<div className="update__profile_inputs">
				<Stack spacing={10}>
					<InputGroup>
						<InputLeftElement children={<MdAccountBox size="20px" />} />
						<Input
							onChange={handleInputs}
							value={full_name}
							name="full_name"
							type="text"
							placeholder="Full Name"
						/>
					</InputGroup>

					<Select
						placeholder="Select Service Category"
						onChange={handleInputs}
						name="category"
						value={category}
					>
						<option value="Fashion Design"> Fashion Design </option>
						<option value="Hair Styling"> Hair Styling </option>
						<option value="Building"> Building </option>
						<option value="Decoration"> Decoration </option>
						<option value="Catering"> Catering </option>
						<option value="Tech/IT"> Tech/IT </option>
						<option value="Transport"> Transport </option>
						<option value="Engineering"> Engineering </option>
						<option value="Other"> Other </option>
					</Select>

					<InputGroup>
						<InputLeftElement
							children={<MdAccountBox size="20px" />}
						/>
						<Input
							onChange={handleInputs}
							value={experience}
							name="experience"
							type="number"
							placeholder="Years Of Experience"
						/>
					</InputGroup>

					<InputGroup>
						<InputLeftElement children={<Icon name="email" size="20px" />} />
						<Input
							type="email"
							placeholder="Email"
							onChange={handleInputs}
							name="email"
							value={email}
						/>
					</InputGroup>

					<Select
						placeholder="Location"
						onChange={handleInputs}
						name="location"
						value={location}
					>
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

					<Textarea
						value={comment}
						name="comment"
						onChange={handleInputs}
						placeholder="Tell us a little about yourself..."
					/>
				</Stack>
			</div>
		);
}

export default UpdateProfileInputs
