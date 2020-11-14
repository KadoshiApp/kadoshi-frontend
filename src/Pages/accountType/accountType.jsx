import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from "react-router-dom";

import { errorMessage } from '../../redux/message/message.action'

import TopNav from "../../components/topNav/topNav";
import { FooterThin } from "../../components/footer/footer";

import { Select } from '@chakra-ui/core';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';

import './accountType.scss'

const AccountType = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = () => {
        if (!input) {
            dispatch(errorMessage('Please select an option!'))
        }
        if (input.trim() === 'Client(User)') {
            history.push('/client')
        } else if (input.trim() === 'Professional(Service Provider)') {
            history.push('/signUp')
        }
    }

	return (
		<div>
			<div className="signIn__main">
				<TopNav />
				<div className="signIn__main_body">
					<div className="signIn__main_caption">
						<div> Create an </div>
						<div> Account </div>
						<div> First Things First - Select Account Type! </div>
					</div>
					<div className="signIn__main_select">
						<div>
							<Select
								placeholder='Signup as'
								variant="outline"
								value={input}
								onChange={handleChange}
							>
								<option value="Client(User)"> Client(User) </option>
								<option value="Professional(Service Provider)"> Professional(Service Provider) </option>
							</Select>
						</div>
						<div className="signIn__main_button">
							<ButtonSmall caption="Next >>" roundEdge clicked={onSubmit} />
							<div>Already Have An Account? <Link to='/signIn'>LOG IN</Link></div>
						</div>
					</div>
				</div>
			</div>
			<div className="signIn__main_footer">
				<FooterThin />
			</div>
		</div>
	);
};

export default AccountType;
