// ordersSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { userRequest } from '../utils/request';

const initialState = {
    orders: [],
    pending: false,
    error: false,
};

// Thunk để gửi yêu cầu POST tạo đơn hàng mới
export const createOrder = createAsyncThunk('orders/createOrder', async (orderData, thunkAPI, token) => {
    if (!token) {
        console.log('Token is not defined !');
    }
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = await userRequest(token).post('orders', orderData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getUserOrders = createAsyncThunk('orders/getOrder', async (thunkAPI, token, userId) => {
    if (!token) {
        console.log('Token is not defined !');
    }
    try {
        const response = await userRequest(token).get(`orders/find/${userId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.pending = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.pending = false;
                state.orders.push(action.payload);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.pending = false;
                state.error = action.payload;
            })

            .addCase(getUserOrders.pending, (state) => {
                state.pending = true;
                state.error = null;
            })
            .addCase(getUserOrders.fulfilled, (state, action) => {
                state.pending = false;
                state.orders = action.payload;
            })
            .addCase(getUserOrders.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export default orderSlice.reducer;
