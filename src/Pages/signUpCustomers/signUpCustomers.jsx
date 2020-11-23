import React, { Fragment, useState, memo, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
// import Auth from '../../Auth.config'

import { signUpCustomer } from '../../redux/signUpCustomer/signUp.actions'
import { errorMessage } from '../../redux/message/message.action'


import { Icon, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/core';
import { MdAccountBox } from 'react-icons/md';

import TopNav from "../../components/topNav/topNav";
import { FooterThin } from "../../components/footer/footer";
import ButtonSmall from "../../components/buttonSmall/buttonSmall";

import './signUpCustomers.scss';

const SignUpCustomers = memo(({
    signUp,
    error
}) => {
    const initialState = {
        name: '',
        email: '',
        confirmEmail: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }
    // const history = useHistory()
    // const fetchedEmail = useHistory((state) => state.signUpCustomer.email)
    const [ inputData, setInputData ] = useState(initialState)
    const { name, email, confirmEmail, phone, password, confirmPassword } = inputData

    // useEffect(() => {
    //     if (fetchedEmail !== null) {
    //         window.setTimeout(() => {
    //             history.push('/') 
    //         }, 1500);
    //     }
    // }, [fetchedEmail])

    const handleInputs = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        if (!name || !email || !phone || !password || !confirmEmail || !confirmPassword) {
            return error('Complete all Fields!')
        } else if (password !== confirmPassword) {
            return error('passwords do not match!')
        } else if (email !== confirmEmail) {
            return error('emails do not match!')
        } else if (name.split(' ').length < 2) {
            return error('Please Enter full name.')
        }
        signUp({ full_name: name, email, number: phone, password });
    }

    return (
        <Fragment>
            <div className='professional__main _professional'>
                <div className='professional__main_body'> 
                    <TopNav /> 
                    <div className='professional__main_caption'>
                        <div> Kadoshi Customers </div>
                        <div className='___link'> Already have an Account?<Link to='/signIn'> SIGN IN</Link> </div>
                    </div>
                    <div className='professional__main_inputs'>
                        <div> 
                            <Stack spacing={8}>
                                <InputGroup>
                                    <InputLeftElement children={<MdAccountBox size='20px' color='#fff' />} />
                                    <Input 
                                        onChange={handleInputs}
                                        value={name}
                                        name='name'
                                        type='text' 
                                        placeholder='Full Name'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='email' color='#fff' size='18px' />} />
                                    <Input 
                                        onChange={handleInputs}
                                        value={email}
                                        name='email'
                                        type='email' 
                                        placeholder='Email'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='email' color='#fff' size='18px' />} />
                                    <Input 
                                        onChange={handleInputs}
                                        value={confirmEmail}
                                        name='confirmEmail'
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
                                        onChange={handleInputs}
                                        value={phone}
                                        name='phone'
                                        type='tel' 
                                        placeholder='Phone Number'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='lock' color='#fff' size='18px'  />} />
                                    <Input 
                                        onChange={handleInputs}
                                        value={password}
                                        name='password'
                                        type='password' 
                                        placeholder='Password'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Icon name='lock' color='#fff' size='18px' />} />
                                    <Input 
                                        onChange={handleInputs}
                                        value={confirmPassword}
                                        name='confirmPassword'
                                        type='password' 
                                        placeholder='Confirm Password'/>
                                </InputGroup>
                            </Stack>
                        </div>
                    </div>
                    <div className='professional__btn'>
                        <ButtonSmall caption='register' roundEdge clicked={handleSubmit} />
                    </div>
                </div>
            </div>
            <div> <FooterThin /> </div>
        </Fragment>
    )
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (payload) => dispatch(signUpCustomer(payload)),
    error: (message) => dispatch(errorMessage(message))
});

export default connect(null, mapDispatchToProps)(memo(SignUpCustomers))
