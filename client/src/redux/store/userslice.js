
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("user/login", async (user) => {
    const response = await axios.post(
        "http://localhost:8081/auth/login", user);
    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    // initialState: {
    //     userInfo: {
    //         name: "john",
    //         email: "john@email.com",
    //     },
    //     pending: null,
    //     error: null,
    // },
    // reducers: {},
    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, action) => { // action.payload is the updated user info
            state.userInfo = action.payload;
            state.pending = false;
        },
        [updateUser2.rejected]: (state) => { // error
            state.pending = null;
            state.error = true;
        },
    },
});
export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;