import React, { useState } from 'react'
import { Icon, Input, InputGroup, InputLeftElement, Stack, Select, Textarea } from "@chakra-ui/core";
import { MdAccountBox } from "react-icons/md";

import './updateProfileInputs.scss';

const UpdateProfileInputs = () => {
    const initialState = {
        full_name: 'Yo',
        comment: ''
	};
    const [ inputData, setInputData ] = useState(initialState)
    const { full_name, comment } = inputData

    const handleInputs = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };



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
					>
						<option value="Option 1">Option 1</option>
						<option value="Option 2">Option 2</option>
						<option value="Option 3">Option 3</option>
					</Select>

					<Select
						placeholder="Years of Job Experience"
						onChange={handleInputs}
						name="experience"
					>
						<option value="Option 1">Option 1</option>
						<option value="Option 2">Option 2</option>
						<option value="Option 3">Option 3</option>
					</Select>

					<InputGroup>
						<InputLeftElement children={<Icon name="email" size="20px" />} />
						<Input
							type="email"
							placeholder="Email"
							onChange={handleInputs}
							name="email"
						/>
					</InputGroup>

					<Select
						placeholder="Location"
						onChange={handleInputs}
						name="location"
					>
						<option value="Option 1">Option 1</option>
						<option value="Option 2">Option 2</option>
						<option value="Option 3">Option 3</option>
					</Select>

					<Textarea
                        value={comment}
                        name='comment'
						onChange={handleInputs}
						placeholder='Tell us a little about yourself...'
					/>
				</Stack>
			</div>
		);
}

export default UpdateProfileInputs
