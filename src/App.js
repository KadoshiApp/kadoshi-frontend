import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/homePage/homePage';
import SignIn from './Pages/signIn/signIn';
import AboutPage from './Pages/aboutPage/aboutPage';
import AccountType from './Pages/accountType/accountType';
import SignUpProfessional from './Pages/signUpProfessional/signUpProfessional';
import SignUpCustomers from './Pages/signUpCustomers/signUpCustomers';
import ContactPage from './Pages/contactPages/ContactPage';
import ProfessionalPage from './Pages/professionalPage/ProfessionalPage';

import './App.css';

function App() {
  return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/signIn" component={SignIn} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/accountType" component={AccountType} />
				<Route exact path="/professional" component={SignUpProfessional} />
				<Route exact path="/customers" component={SignUpCustomers} />
				<Route exact path="/contact" component={ContactPage} />
				<Route exact path="/services" component={ProfessionalPage} />
			</Switch>
		</div>
	);
}

export default App;
