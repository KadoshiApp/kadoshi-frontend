import React, { useState } from 'react';
import Axios from '../../Axios.config';
import { useDispatch } from 'react-redux';
import { errorMessage, successMessage } from '../../redux/message/message.action';
import { loading } from '../../redux/loading/loading.action';
import { NavLink } from 'react-router-dom';
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Select,
} from '@chakra-ui/core';

import './forgotPassword.scss';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    type: '',
  };

  const [inputData, setInputData] = useState(initialState);
  const { email, type } = inputData;

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (!email || !type) return dispatch(errorMessage('Fill all fields'));
    if (!email) return dispatch(errorMessage('input your email address'));
    if (!type) return dispatch(errorMessage('please select type'));

    if (email && type) {
      try {
        dispatch(loading(true));
        const data = await Axios.init().post(
          'https://kadoshiservices.herokuapp.com/api/forgetpassword',
          { email, usertype: type.split('(')[0].toLowerCase() }
        );
        data.data.message && dispatch(successMessage('sent, check your mail.'));
        dispatch(loading(false));
      } catch (err) {
        dispatch(loading(false));
        dispatch(errorMessage(err.message));
      }
    }
  };

  return (
    <div className="forgot_password_container">
      <div className="forgot_password_body">
        <Stack spacing={4}>
          <div className="forgot_password_head">
            <NavLink exact to="/">
              Kadoshi
            </NavLink>
          </div>

          <InputGroup>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleInputs}
              name="email"
            />
            <InputRightElement children={<Icon name="email" size="20px" />} />
          </InputGroup>

          <Select
            placeholder="type"
            variant="outline"
            value={type}
            name="type"
            onChange={handleInputs}
          >
            <option value="Client(User)"> Client(User) </option>
            <option value="Professional(Service Provider)">
              Professional(Service Provider)
            </option>
          </Select>
        </Stack>

        <div className="forgot_password_main_button">
          <button onClick={onSubmit} className="forgot_password_button">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
