import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import './index.css';
import './util.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const ThemedApp = () => (
	<ThemeProvider>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</ThemeProvider>
);

ReactDOM.render(
	<Provider store={store}>
		<ThemedApp />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
