import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';
import { userRequest } from '../utils/request';

// export const getCartInfo = createAsyncThunk('cart/getCartInfo', async (token) => {
//     try {
//         const response = await userRequest(token).get('cart');

//         return response.data;
//     } catch (error) {
//         console.log('Error :', error);
//         throw error;
//     }
// });

// export const addItemToCart = createAsyncThunk('cart/additemToCart', async ({ token, ...data }) => {
//     try {
//         const response = await userRequest(token).post('cart', { data });
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.log('Error :', error);
//         throw error;
//     }
// });

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalCount: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.items.findIndex(
                (item) => item._id === action.payload._id && item.size === action.payload.size,
            );

            if (existingIndex >= 0) {
                state.items[existingIndex] = {
                    ...state.items[existingIndex],
                    quantity: state.items[existingIndex].quantity + 1,
                };
                toast.info('The product already exists in the cart, the quantity is increased by 1');
            } else {
                state.totalCount += 1;
                state.items.push(action.payload);
                state.totalAmount += action.payload.price * action.payload.quantity;
                toast.success('Successfully added 1 product to cart !');
            }
        },
        changeSize(state, action) {
            const itemIndex = state.items.findIndex((item) => item._id === action.payload._id);

            state.items[itemIndex].size = action.payload.size;
        },
        changeQuantity(state, action) {
            const itemIndex = state.items.findIndex((item) => item._id === action.payload._id);

            state.items[itemIndex].quantity = action.payload.quantity;
        },
        removeFromCart(state, action) {
            const existingIndex = state.items.findIndex(
                (item) => item._id === action.payload._id && item.size === action.payload.size,
            );

            if (existingIndex >= 0) {
                state.items.splice(existingIndex, 1);
                toast.error('delete');
            }
            state.totalCount -= 1;
        },
        getCartTotal: (state, action) => {
            let { totalAmount, totalCount } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;

                    const itemTotal = price * quantity;

                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalCount += parseInt(parseInt(quantity));
                    return cartTotal;
                },
                {
                    totalAmount: 0,
                    totalCount: 0,
                },
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2));

            state.totalCount = totalCount;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getCartInfo.pending, (state) => {
    //             // Xử lý khi yêu cầu GET đang diễn ra
    //             // Ví dụ: cập nhật trạng thái loading
    //             console.log('GGoif goi');
    //         })
    //         .addCase(getCartInfo.fulfilled, (state, action) => {
    //             // state.items = action.payload.products;
    //         })
    //         .addCase(getCartInfo.rejected, (state) => {
    //             // Xử lý khi yêu cầu GET bị từ chối
    //             // Ví dụ: cập nhật trạng thái lỗi (nếu có)
    //             console.log('shit');
    //         })
    //         .addCase(addItemToCart.fulfilled, (state, action) => {
    //             // Xử lý khi yêu cầu thành công
    //             // action.payload chứa dữ liệu trả về từ API (nếu có)
    //         })
    //         .addCase(addItemToCart.rejected, (state, action) => {
    //             // Xử lý khi yêu cầu bị từ chối (lỗi)
    //             // action.error chứa thông tin lỗi từ API
    //         });
    // },
});

export const { addToCart, changeSize, removeFromCart, changeQuantity, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
