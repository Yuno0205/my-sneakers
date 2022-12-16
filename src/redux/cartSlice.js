import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.items.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
    },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
