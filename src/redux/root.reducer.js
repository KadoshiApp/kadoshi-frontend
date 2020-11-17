import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import signUpCustomer from './signUpCustomer/signUp.reducer';
import loadingReducer from './loading/loading.reducer';
import messageReducer from './message/message.reducer';
import signUpProfReducer from './signUpProffesional/signUpProf.reducers';
import loginReducer from './login/login.reducer';

const persistConfig = {
	key: 'root',
    storage
};

const rootReducer = combineReducers({
    signUpCustomer,
    loadingReducer,
    messageReducer,
    signUpProfReducer,
    loginReducer
});

export default persistReducer(persistConfig, rootReducer);
