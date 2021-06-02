import React, { Fragment, useState, memo } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { signUpCustomer } from '../../redux/signUpCustomer/signUp.actions';
import { errorMessage } from '../../redux/message/message.action';

import { Input, InputGroup } from '@chakra-ui/core';

import TopNav from '../../components/topNav/topNav';

import './signUpCustomers.scss';
import Logo from '../../components/Logo/Logo';

const SignUpCustomers = memo(({ signUp, error }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  const { push } = useHistory();
  const [inputData, setInputData] = useState(initialState);
  const { name, email, phone, password, confirmPassword } = inputData;

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !password || !confirmPassword) {
      return error('Complete all Fields!');
    } else if (password !== confirmPassword) {
      return error('passwords do not match!');
    } else if (name.split(' ').length < 2) {
      return error('Please Enter full name.');
    } else if (password.length < 8) {
      return error('Password too short.');
    } else if (phone.length !== 11) {
      return error('input valid number');
    }
    signUp({ full_name: name, email, number: phone, password });

    window.setTimeout(() => {
      push('/services');
    }, 1500);
  };

  return (
    <Fragment>
      <div className="">
        <div className="auth-container">
          <div className="flex-center">
            <Logo />
            <h2>Sign up to Kadoshi services</h2>
            <small className="professional">
              Already have an Account?<Link to="/signin"> Sign in</Link>{' '}
            </small>
          </div>
          <form onSubmit={handleSubmit} className="professional__main_inputs">
            <InputGroup>
              <Input
                onChange={handleInputs}
                value={name}
                name="name"
                type="text"
                placeholder="Full Name"
              />
            </InputGroup>
            <InputGroup>
              <Input
                onChange={handleInputs}
                value={email}
                name="email"
                type="email"
                isRequired
                placeholder="Email"
              />
            </InputGroup>
            <InputGroup>
              <Input
                onChange={handleInputs}
                value={phone}
                name="phone"
                type="tel"
                placeholder="Phone Number"
              />
            </InputGroup>
            <InputGroup>
              <Input
                onChange={handleInputs}
                value={password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </InputGroup>
            <InputGroup>
              <Input
                onChange={handleInputs}
                value={confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </InputGroup>
            <div className="professional__btn">
              <button className="button-hover" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (payload) => dispatch(signUpCustomer(payload)),
  error: (message) => dispatch(errorMessage(message)),
});

export default connect(null, mapDispatchToProps)(memo(SignUpCustomers));
