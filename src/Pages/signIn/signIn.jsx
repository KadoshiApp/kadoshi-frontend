import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { errorMessage } from '../../redux/message/message.action';
import { loginClient } from '../../redux/login/login.actions';

import { Input, InputGroup } from '@chakra-ui/core';

import { FooterWide } from '../../components/footer/footer';

import './signIn.scss';
import Logo from '../../components/Logo/Logo';

const SignIn = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const initialState = {
    email: '',
    password: '',
    type: '',
  };
  const [inputData, setInputData] = useState(initialState);
  const { email, password } = inputData;

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return dispatch(errorMessage('Fill all fields'));
    }
    if (email && password) {
      try {
        dispatch(loginClient({ email, password }));
        setTimeout(() => push('/services'), 1500);
      } catch (err) {
        /* noop */
      }
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <div className="auth-container">
        {/* <TopNav /> */}
        <div className="signIn__main_body">
          <div className="flex-center">
            <Logo />
            <h2>Login to Kadoshi services</h2>
            <small>
              Don't Have An Account? <Link to="/client">Sign up</Link>
            </small>
          </div>
          <form className="signIn__main_inputs" onSubmit={onSubmit}>
            <InputGroup>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={handleInputs}
                name="email"
                isRequired
              />
            </InputGroup>

            <InputGroup>
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={handleInputs}
                name="password"
                isRequired
              />
            </InputGroup>
            <button className="button-hover" type="submit">
              Register
            </button>
          </form>
          <div className="forgot-password">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <FooterWide />
    </div>
  );
};

export default SignIn;
