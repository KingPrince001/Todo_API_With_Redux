import {
    USER_LOGIN_REQUEST,
    USER_LOGOUT_REQUEST,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../constants/userconstants";

export const userLoginReducer = (state = {}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true};
        case USER_LOGOUT_REQUEST:
            return {};
        default:
            return state;
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        default:
            return state;
    }
}