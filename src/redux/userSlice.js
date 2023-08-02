import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserInfo = createAsyncThunk('user/getUserInfo', async () => {
    const response = await axios.get('https://jorrkan-api.onrender.com/api/auth/login/success', {
        withCredentials: true,
    });

    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(getUserInfo.pending, (state) => {
                state.isFetching = true;
                state.error = false;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.isFetching = false;
            })
            .addCase(getUserInfo.rejected, (state) => {
                state.isFetching = false;
                state.error = true;
            });
    },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;

export const selectUserToken = (state) => state.user.currentUser?.user?.token ?? null;
export default userSlice.reducer;

// Selector để lấy trạng thái đăng nhập
export const selectIsLoggedIn = (state) => state.user.currentUser !== null;
