import React from 'react';
import { Icon, Input, InputGroup, Avatar, InputRightElement, Stack } from "@chakra-ui/core";

import TopNav from '../../components/topNav/topNav';
import { FooterThin } from "../../components/footer/footer";


import './signIn.scss';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';

const SignIn = () => {
    return (
        <div style={{height: '100vh'}}>
            <div className='signIn__main'>
                <TopNav />
                <div className='signIn__main_body'>
                    <div className='signIn__main_caption'>
                        <div> Login to your </div>
                        <div> Own Account </div>
                        <div> Enter your Username and Password in the fields provided! </div>
                    </div>
                    <div className='signIn__main_inputs'>
                        <div>
                            <Stack spacing={8}>
                                <InputGroup>
                                    <Input 
                                        type='text' 
                                        placeholder='Email Address'
                                        />
                                    <InputRightElement children={<Avatar size='2xs' />} />
                                </InputGroup>

                                <InputGroup>
                                    <Input 
                                        placeholder='Password'
                                        type='password'  />
                                    <InputRightElement children={<Icon name='lock' color='#fff' />} />
                                </InputGroup>
                            </Stack>
                        </div>
                        <div className='signIn__main_button'>
                            <ButtonSmall 
                                caption='login' 
                                roundEdge />
                            <div>
                                Dont Have An Account? SIGN UP
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='signIn__main_footer'>
                <FooterThin />
            </div>
        </div>
    )
}


export default SignIn;