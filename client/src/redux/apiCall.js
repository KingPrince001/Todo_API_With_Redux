import axios from 'axios';
import { apiDomain } from '../utils/utils';
import { createTodoFailure, createTodoStart, createTodoSuccess, deleteTodoFailure, deleteTodoStart, deleteTodoSuccess, todoFailure, todoStart, todoSuccess, updateTodoFailure, updateTodoStart, updateTodoSuccess } from './todoSlice';
import { login, logout } from './userSlice';


export const loginUser = async (dispatch, user) => {
    console.log(user, dispatch);
    dispatch(login());
    try {
        const { data } = await axios.post(`${apiDomain}/auth/login`, user);
        alert('logged in succesfully');
        console.log(data);
    } catch (err) {
        console.log(err)
       
    }
}
export const logOutuser = async (dispatch) => {
    console.log(dispatch);
    dispatch(logout())
}

export const getTodosData = async (dispatch, user) => {
    dispatch(todoStart());
    console.log(`${apiDomain}/todos`)
    try {
        const { data } = await axios.get(`${apiDomain}/todos`,
            { headers: { "authorization": `${user.token}` } }
        );
        console.log(data);
        dispatch(todoSuccess(data));
    } catch (err) {
        console.log(err);
        dispatch(todoFailure())
    }
}

export const deleteTodo = async (id, dispatch, user) => {
    console.log(id, 'val');
    dispatch(deleteTodoStart())
    try {
        await axios.delete(`${apiDomain}/todo/${id}`,
            { headers: { "authorization": `${user.token}` } }
        );
        dispatch(deleteTodoSuccess(id))
    } catch (err) {
        dispatch(deleteTodoFailure());
    }
}

export const addTodo = async (dispatch, data) => {
    dispatch(createTodoStart())
    try {
        await axios.post(`${apiDomain}/todos`, data)
        dispatch(createTodoSuccess(data));
    }
    catch (err) {
        console.log(err);
        dispatch(createTodoFailure())
    }
}

export const updateTodo = async (todo, id, dispatch) => {
    console.log(todo, id, 'all products');
    dispatch(updateTodoStart());
    try {
        const { data } = await axios.put(`${apiDomain}/todo/${id}`, todo
        );
        console.log(data);
        dispatch(updateTodoSuccess({ todo, id }));


    } catch (err) {
        console.log(err);
        dispatch(updateTodoFailure());
    }
}