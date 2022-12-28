import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalCount: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            // state.quantity += 1;
            // state.items.push(action.payload);
            // state.total += action.payload.price * action.payload.quantity;

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
            toast.info('Size updated !');
        },
        changeQuantity(state, action) {
            const itemIndex = state.items.findIndex((item) => item._id === action.payload._id);

            state.items[itemIndex].quantity = action.payload.quantity;
            toast.info('Quantity updated !');
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
});

export const { addToCart, changeSize, removeFromCart, changeQuantity, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
