import React, { Fragment } from "react";
import { Icon, Input, InputGroup, InputLeftElement, Select, Stack } from "@chakra-ui/core";

import TopNav from "../../components/topNav/topNav";
import { FooterThin } from "../../components/footer/footer";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import './signUpCustomers.scss';

const SignUpCustomers = () => {
    return (
        <Fragment>
            <div className='professional__main _professional'>
                <div className='professional__main_body'> 
                    <TopNav /> 
                    <div className='professional__main_caption'>
                        <div> Kadoshi Customers </div>
                        <div> Already have an Account? SIGN IN </div>
                    </div>
                    <div className='professional__main_inputs'>
                        <div> 
                            <Stack spacing={8}>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='at-sign' color='#fff' size='18px' />} />
                                    <Input 
                                        type='text' 
                                        placeholder='Full Name'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='email' color='#fff' size='18px' />} />
                                    <Input 
                                        type='email' 
                                        placeholder='Email'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='email' color='#fff' size='18px' />} />
                                    <Input 
                                        type='email' 
                                        placeholder='Confirm Email'/>
                                </InputGroup>
                            </Stack>
                        </div>
                        <div> 
                            <Stack spacing={8}>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='phone' color='#fff' size='18px' />} />
                                    <Input 
                                        type='tel' 
                                        placeholder='Phone Number'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='lock' color='#fff' size='18px'  />} />
                                    <Input 
                                        type='password' 
                                        placeholder='Password'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='lock' color='#fff' size='18px' />} />
                                    <Input 
                                        type='password' 
                                        placeholder='Confirm Password'/>
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

export default SignUpCustomers
