import React, { Fragment } from "react";
import { Icon, Input, InputGroup, InputLeftElement, Select, Stack } from "@chakra-ui/core";

import TopNav from "../../components/topNav/topNav";
import { FooterThin } from "../../components/footer/footer";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import './signUpProfessional.scss';

const SignUpProfessional = () => {
    return (
        <Fragment>
            <div className='professional__main'>
                <div className='professional__main_body'> 
                    <TopNav /> 
                    <div className='professional__main_caption'>
                        <div> Kadoshi Professionals </div>
                        <div> Already have an Account? SIGN IN </div>
                    </div>
                    <div className='professional__main_inputs'>
                        <div> 
                            <Stack spacing={8}>
                                <InputGroup>
                                <InputLeftElement children={<Icon name='at-sign' color='#fff' size='20px' />} />
                                    <Input 
                                        type='text' 
                                        placeholder='Full Name'/>
                                </InputGroup>
                                <Select placeholder='Select Service Category' variant='outline'>
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
                                <Select placeholder='Years of Job Experience'      variant='outline'>
                                    <option value='0-3'> 0-3 </option>
                                    <option value='3-5'> 3-5 </option>
                                    <option value='5&above'> 5&above </option>
                                </Select>
                            </Stack>
                        </div>
                        <div> 
                            <Stack spacing={8}>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='email' color='#fff' size='20px'  />} />
                                    <Input 
                                        type='text' 
                                        placeholder='Email'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='lock' color='#fff' size='20px' />} />
                                    <Input 
                                        type='password' 
                                        placeholder='Password'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='at-sign' color='#fff' size='20px' />} />
                                    <Input 
                                        type='text' 
                                        placeholder='Address'/>
                                </InputGroup>
                            </Stack>
                        </div>
                    </div>
                    <div className='professional__btn'>
                        <ButtonSmall caption='register' roundEdge />
                    </div>
                </div>
            </div>
            <div> <FooterThin /> </div>
        </Fragment>
    )
}

export default SignUpProfessional
