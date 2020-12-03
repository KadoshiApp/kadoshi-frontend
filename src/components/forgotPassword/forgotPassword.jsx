import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { errorMessage } from "../../redux/message/message.action";
import { NavLink } from "react-router-dom";
// import Auth from '../../Auth.config';
import { loginClient, loginProf } from "../../redux/login/login.actions";
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Select,
} from "@chakra-ui/core";
import { FooterThin } from "../../components/footer/footer";

import "./forgotPassword.scss";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    type: "",
  };

  const [inputData, setInputData] = useState(initialState);
  const { email, type } = inputData;

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!email || !type) {
      return dispatch(errorMessage("Fill all fields"));
    }
    if (email && type === "Client(User)") {
      return dispatch(loginClient({ email }));
    }
    if (email && type === "Professional(Service Provider)") {
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
            variant="outline"
            value={type}
            name="type"
            onChange={handleInputs}
          >
            <option value="Client(User)"> Client(User) </option>
            <option value="Professional(Service Provider)">
              {" "}
              Professional(Service Provider){" "}
            </option>
          </Select>
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

export default ForgotPassword;
