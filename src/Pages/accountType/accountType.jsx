import React from 'react'
import TopNav from "../../components/topNav/topNav";
import { FooterThin } from "../../components/footer/footer";

import { Select } from '@chakra-ui/core';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';

import './accountType.scss'


const AccountType = () => {
	return (
		<div>
            <div className='signIn__main'>
                <TopNav />
                <div className='signIn__main_body'>
                    <div className='signIn__main_caption'>
                        <div> Create an </div>
                        <div> Account </div>
                        <div> First Things First - Select Account Type! </div>
                    </div>
                    <div className='signIn__main_select'>
                        <div>
                            <Select placeholder='Select option' variant='outline'>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </Select>
                        </div>
                        <div className='signIn__main_button'>
                            <ButtonSmall 
                                caption='Next >>'
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
	);
};

export default AccountType;
