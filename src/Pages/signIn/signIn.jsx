import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../../redux/message/message.action';
import { loginClient, loginProf } from '../../redux/login/login.actions';

import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Select,
} from '@chakra-ui/core';

import TopNav from '../../components/topNav/topNav';
import { FooterWide } from '../../components/footer/footer';

import './signIn.scss';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';

const SignIn = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const initialState = {
    email: '',
    password: '',
    type: '',
  };
  const [inputData, setInputData] = useState(initialState);
  const { email, password, type } = inputData;

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!email || !password || !type) {
      return dispatch(errorMessage('Fill all fields'));
    }
    if (email && password && type === 'Client(User)') {
      try {
        dispatch(loginClient({ email, password }));
        setTimeout(() => push('/services'), 1500);
      } catch (err) {
        /* noop */
      }
    }
    if (email && password && type === 'Professional(Service Provider)') {
      try {
        dispatch(loginProf({ email, password }));
        setTimeout(() => push('/services'), 1500);
      } catch (err) {
        /* noop */
      }
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <div className="signIn__main">
        <TopNav />
        <div className="signIn__main_body">
          <div className="signIn__main_caption">
            <div> Login to your </div>
            <div> Own Account </div>
            <div> Enter your Username and Password in the fields provided! </div>
          </div>
          <div className="signIn__main_inputs">
            <div>
              <Stack spacing={8}>
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleInputs}
                    name="email"
                  />
                  <InputRightElement
                    children={<Icon name="email" color="#fff" size="20px" />}
                  />
                </InputGroup>

                <InputGroup>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleInputs}
                    name="password"
                  />
                  <InputRightElement children={<Icon name="lock" color="#fff" />} />
                </InputGroup>

                <Select
                  placeholder="Login as"
                  variant="outline"
                  value={type}
                  name="type"
                  onChange={handleInputs}
                >
                  <option value="Client(User)"> Client(User) </option>
                  <option value="Professional(Service Provider)">
                    {' '}
                    Professional(Service Provider){' '}
                  </option>
                </Select>
              </Stack>
            </div>
            <div className="signIn__main_button">
              <ButtonSmall caption="login" roundEdge clicked={onSubmit} />
              <div>
                Dont Have An Account? <Link to="/account">SIGN UP</Link>
              </div>
              <div>
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterWide />
    </div>
  );
};

export default SignIn;
