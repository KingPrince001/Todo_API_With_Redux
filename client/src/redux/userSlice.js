import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('user'));
const initialState = storedUser || {
    username: 'name',
    email: 'email',
};

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        login: (state, action) => {
            const { name, token, email } = action.payload;
            state.username = name;
            state.email = email;
            state.token = token;
            localStorage.setItem('user', JSON.stringify(state));
        },
        logout: (state) => {
            state.username = 'name';
            state.email = 'email';
            state.token = null; 

            localStorage.removeItem('user');
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
