import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loading } from '../../redux/loading/loading.action';
import Axios from '../../Axios.config';
import { errorMessage, successMessage } from '../../redux/message/message.action';
import { NavLink } from 'react-router-dom';
import { Icon, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/core';

const PasswordConfirmation = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = {
    confirmPassword: '',
    password: '',
  };

  const [inputData, setInputData] = useState(initialState);
  const { password, confirmPassword } = inputData;

  useEffect(() => {
    if (!location.pathname.split('resetpassword/')[1]) return history.push('/');
  }, [history, location.pathname]);

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (!password || !confirmPassword) return dispatch(errorMessage('fill all fields.'));
    if (password !== confirmPassword)
      return dispatch(errorMessage('passwords do not match'));
    dispatch(loading(true));
    try {
      const query = location.pathname.split('resetpassword/')[1];
      const userType = location.pathname.split('resetpassword/')[0];
      const authArray = query.split('/');
      const type = userType.split('/')[2];
      await Axios.init().post(
        `https://kadoshiservices.herokuapp.com/api/createpassword/${type}`,
        { password, token: authArray[1], id: authArray[0] }
      );
      dispatch(loading(false));
      dispatch(successMessage('password successfully changed'));
      setTimeout(() => {
        history.push('/signIn');
      }, 3000);
    } catch (err) {
      dispatch(loading(false));
      if (err.response.status === 500) return dispatch(errorMessage('an error occured!'));
      dispatch(errorMessage(err.message));
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
          <div>New Password</div>

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
          <div>Confirm New Password</div>
          <InputGroup>
            <Input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={handleInputs}
              name="confirmPassword"
            />
            <InputRightElement children={<Icon name="lock" color="#fff" />} />
          </InputGroup>
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

export default PasswordConfirmation;
