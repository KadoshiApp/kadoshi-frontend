import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { errorMessage } from "../../redux/message/message.action";
import { NavLink } from "react-router-dom";
import { loginClient, loginProf } from "../../redux/login/login.actions";
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/core";
import { FooterThin } from "../../components/footer/footer";

import "./passwordConfirmation.scss";

const PasswordConfirmation = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    type: "",
  };

  const [inputData, setInputData] = useState(initialState);
  const { email, password } = inputData;

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!email) {
      return dispatch(errorMessage("Fill all fields"));
    }
    if (email === "Client(User)") {
      return dispatch(loginClient({ email }));
    }
    if (email === "Professional(Service Provider)") {
      return dispatch(loginProf({ email }));
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
              placeholder="Password"
              type="password"
              value={password}
              onChange={handleInputs}
              name="password"
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
      <div></div>
      <FooterThin />
    </div>
  );
};

export default PasswordConfirmation;
