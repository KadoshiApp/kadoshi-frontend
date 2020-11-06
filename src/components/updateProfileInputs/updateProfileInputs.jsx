import React from 'react'
import { Icon, Input, InputGroup, InputLeftElement, Stack, Select } from "@chakra-ui/core";
import { MdAccountBox } from "react-icons/md";

import './updateProfileInputs.scss';

const UpdateProfileInputs = () => {
    return (
        <div className="update__profile_inputs">
            <Stack spacing={10}>
                <InputGroup>
                    <InputLeftElement
                        children={<MdAccountBox size='20px' />}
                    />
                    <Input type='text' placeholder='Full Name' />
                </InputGroup>

                <Select placeholder='Select Service Category'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </Select>

                <Select placeholder='Years of Job Experience'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </Select>

                <InputGroup>
                    <InputLeftElement
                        children={<Icon name='email' size='20px' />}
                    />
                    <Input type='email' placeholder='Email' />
                </InputGroup>

                <Select placeholder='Location'>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </Select>
            </Stack>
        </div>
    )
}

export default UpdateProfileInputs
