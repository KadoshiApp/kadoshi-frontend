import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth.config';

import HomePage from './Pages/homePage/homePage';
import SignIn from './Pages/signIn/signIn';
import AboutPage from './Pages/aboutPage/aboutPage';
import AccountType from './Pages/accountType/accountType';
import SignUpProfessional from './Pages/signUpProfessional/signUpProfessional';
import SignUpCustomers from './Pages/signUpCustomers/signUpCustomers';
import ContactPage from './Pages/contactPages/ContactPage';
import ProfessionalPage from './Pages/professionalPage/ProfessionalPage';
import UpdateProfile from './Pages/updateProfile/updateProfile';
import ServicesPage from './Pages/servicesPage/servicesPage';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import PasswordConfirmation from './components/passwordConfirmation/passwordConfirmation';

import './App.css';
import Message from './components/message/message'
import IndeterminateProgressbar, {
	IndeterminateProgressBarState,
	ProgressBar,
	ProgressSwitch,
} from './components/progressBar/IndeterminateProgressbar';


function App() {

	let routes = (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/signIn" component={SignIn} />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/account" component={AccountType} />
			<Route exact path="/forgotPassword" component={ForgotPassword} />
			<Route path="/createpassword" component={PasswordConfirmation} />
			<Route exact path="/signUp" component={SignUpProfessional} />
			<Route exact path="/client" component={SignUpCustomers} />
			<Route exact path="/contact" component={ContactPage} />
			<Redirect to="/" />
		</Switch>
	);

	if (Auth.isAuthenticated()) {
		routes = (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signIn" component={SignIn} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/account" component={AccountType} />
				<Route exact path="/forgotPassword" component={ForgotPassword} />
				<Route exact path="/signUp" component={SignUpProfessional} />
				<Route exact path="/client" component={SignUpCustomers} />
				<Route exact path="/contact" component={ContactPage} />
				<Route exact path="/services" component={ProfessionalPage} />
				<Route exact path="/professional/:slug" component={ServicesPage} />
				<Route exact path="/profile" component={UpdateProfile} />
			</Switch>
		);
	}

	return (
		<div className="app">
			<Message />
			<IndeterminateProgressbar />
			<Suspense fallback={<ProgressBar loading />}>
				<IndeterminateProgressBarState />
				<ProgressSwitch />
				{routes}
			</Suspense>
		</div>
	);
}

export default App;
