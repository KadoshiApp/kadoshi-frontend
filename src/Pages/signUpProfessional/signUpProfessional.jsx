import React, { Fragment, memo, useState, useEffect } from 'react';
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from '@chakra-ui/core';
import { MdAccountBox } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import { errorMessage } from '../../redux/message/message.action';
import { signUpProf } from '../../redux/signUpProffesional/signUpProf.action';

import TopNav from '../../components/topNav/topNav';
import { FooterThin } from '../../components/footer/footer';
import ButtonSmall from '../../components/buttonSmall/buttonSmall';

import './signUpProfessional.scss';

const SignUpProfessional = memo(({ error, signUp }) => {
  const initialState = {
    full_name: '',
    email: '',
    password: '',
    address: '',
    job_type: '',
    experience: '',
    phoneNumber: '',
    confirmPass: '',
  };

  const isAuth = useSelector((state) => state.loginReducer.isAuth);
  const { push } = useHistory();
  const [inputData, setInputData] = useState(initialState);
  const {
    full_name,
    email,
    password,
    address,
    job_type,
    experience,
    confirmPass,
    phoneNumber,
  } = inputData;
  console.log(isAuth, 'isAuth');

  useEffect(() => {
    if (isAuth) {
      window.setTimeout(() => {
        push('/services');
      }, 1500);
    }
  }, [push, isAuth]);

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (
      !full_name ||
      !email ||
      !password ||
      !address ||
      !job_type ||
      !experience ||
      !confirmPass ||
      !phoneNumber
    ) {
      return error('please complete all fields!');
    } else if (password !== confirmPass) {
      return error("passwords don't match!");
    } else if (full_name.split(' ').length < 2) {
      return error('please enter full name.');
    }
    try {
      signUp({ full_name, email, password, address, job_type, experience, phoneNumber });
      window.setTimeout(() => {
        push('/services');
      }, 1500);
    } catch (err) {
      /* noop */
    }
  };

  return (
    <Fragment>
      <div className="professional__main">
        <div className="professional__main_body">
          <TopNav />
          <div className="professional__main_caption">
            <div> Kadoshi Professionals </div>
            <div className="___link">
              Already have an Account? <Link to="/signIn"> SIGN IN</Link>
            </div>
          </div>
          <div className="professional__main_inputs">
            <div>
              <Stack spacing={8}>
                <InputGroup>
                  <InputLeftElement
                    children={<MdAccountBox size="20px" color="#fff" />}
                  />
                  <Input
                    onChange={handleInputs}
                    value={full_name}
                    name="full_name"
                    type="text"
                    placeholder="Full Name"
                  />
                </InputGroup>
                <Select
                  placeholder="Select Service Category"
                  variant="outline"
                  value={job_type}
                  name="job_type"
                  onChange={handleInputs}
                >
                  <option value="Fashion Design"> Fashion Design </option>
                  <option value="Hair Styling"> Hair Styling </option>
                  <option value="Building"> Building </option>
                  <option value="Decoration"> Decoration </option>
                  <option value="Catering"> Catering </option>
                  <option value="Tech/IT"> Tech/IT </option>
                  <option value="Transport"> Transport </option>
                  <option value="Engineering"> Engineering </option>
                  <option value="Other"> Other </option>
                </Select>
                <InputGroup>
                  <InputLeftElement
                    children={<MdAccountBox size="20px" color="#fff" />}
                  />
                  <Input
                    onChange={handleInputs}
                    value={experience}
                    name="experience"
                    type="number"
                    placeholder="Years Of Experience"
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={<MdAccountBox size="20px" color="#fff" />}
                  />
                  <Input
                    onChange={handleInputs}
                    value={phoneNumber}
                    name="phoneNumber"
                    type="number"
                    placeholder="Phone"
                  />
                </InputGroup>
              </Stack>
            </div>
            <div>
              <Stack spacing={8}>
                <InputGroup>
                  <InputLeftElement
                    children={<Icon name="email" color="#fff" size="20px" />}
                  />
                  <Input
                    onChange={handleInputs}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={<Icon name="lock" color="#fff" size="20px" />}
                  />
                  <Input
                    onChange={handleInputs}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={<Icon name="lock" color="#fff" size="20px" />}
                  />
                  <Input
                    onChange={handleInputs}
                    value={confirmPass}
                    name="confirmPass"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </InputGroup>
                <Select
                  placeholder="Location"
                  variant="outline"
                  name="address"
                  value={address}
                  onChange={handleInputs}
                >
                  <option value="Abuja"> Abuja </option>
                  <option value="Abia"> Abia </option>
                  <option value="Adamawa"> Adamawa </option>
                  <option value="Akwa Ibom"> Akwa Ibom </option>
                  <option value="Anambra"> Anambra </option>
                  <option value="Bauchi"> Bauchi </option>
                  <option value="Bayelsa"> Bayelsa </option>
                  <option value="Benue"> Benue </option>
                  <option value="Borno"> Borno </option>
                  <option value="Cross River"> Cross River </option>
                  <option value="Delta"> Delta </option>
                  <option value="Ebonyi"> Ebonyi </option>
                  <option value="Edo"> Edo </option>
                  <option value="Ekiti"> Ekiti </option>
                  <option value="Enugu"> Enugu </option>
                  <option value="Gombe"> Gombe </option>
                  <option value="Imo"> Imo </option>
                  <option value="Jigawa"> Jigawa </option>
                  <option value="Kaduna"> Kaduna </option>
                  <option value="Kano"> Kano </option>
                  <option value="Katsina"> Katsina </option>
                  <option value="Kebbi"> Kebbi </option>
                  <option value="Kogi"> Kogi </option>
                  <option value="Kwara"> Kwara </option>
                  <option value="Lagos"> Lagos </option>
                  <option value="Nasarawa"> Nasarawa </option>
                  <option value="Niger"> Niger </option>
                  <option value="Ogun"> Ogun </option>
                  <option value="Ondo"> Ondo </option>
                  <option value="Osun"> Osun </option>
                  <option value="Oyo"> Oyo </option>
                  <option value="Plateau"> Plateau </option>
                  <option value="Rivers"> Rivers </option>
                  <option value="Sokoto"> Sokoto </option>
                  <option value="Taraba"> Taraba </option>
                  <option value="Yobe"> Yobe </option>
                  <option value="Zamfara"> Zamfara </option>
                </Select>
              </Stack>
            </div>
          </div>
          <div className="professional__btn">
            <ButtonSmall caption="register" roundEdge clicked={handleSubmit} />
          </div>
        </div>
      </div>
    </Fragment>
  );
});

const mapDispatchToProps = (dispatch) => ({
  error: (message) => dispatch(errorMessage(message)),
  signUp: (data) => dispatch(signUpProf(data)),
});

export default connect(null, mapDispatchToProps)(memo(SignUpProfessional));
