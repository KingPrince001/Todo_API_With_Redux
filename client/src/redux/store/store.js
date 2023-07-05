import { legacy_createStore as createStore,combineReducers,applyMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userLoginReducer,userRegisterReducer } from '../reducers/userReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})
const initialState = {
    userLogin: {
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
    },
};

const middleware = [thunk];

const store = createStore(reducer,
    initialState,
    applyMiddleware(...middleware));
export default store;