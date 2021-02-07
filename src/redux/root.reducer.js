import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import signUpCustomer from './signUpCustomer/signUp.reducer';
import loadingReducer from './loading/loading.reducer';
import messageReducer from './message/message.reducer';
import loginReducer from './login/login.reducer';
import professionalReducer from './Professionals/professionals.reducer';
import commentReducer from './comment/comment.reducer';

const persistConfig = {
	key: 'root',
    storage,
    blacklist: ['loadingReducer']
};

const rootReducer = combineReducers({
    signUpCustomer,
    loadingReducer,
    messageReducer,
    loginReducer,
    commentReducer,
    professionalReducer
});

export default persistReducer(persistConfig, rootReducer);
