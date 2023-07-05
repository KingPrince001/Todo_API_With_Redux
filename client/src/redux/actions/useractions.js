import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGOUT_REQUEST,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../constants/userconstants";


export const login = (username, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST,
            payload: {username, password}
        });
        const {data} = await axios.post( )
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
        })
    }
    }

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({type: USER_LOGOUT_REQUEST});
}

export const register = (username,email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST,
            payload: {username,email, password}
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}