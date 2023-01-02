import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const existingIndex = state.items.findIndex(
                (item) => item._id === action.payload._id && item.size === action.payload.size,
            );

            if (existingIndex >= 0) {
                toast.info('The product already exists in the wishlist');
            } else {
                state.items.push(action.payload);

                toast.success('Successfully added 1 product to wishlist !');
            }
        },

        removeFromWishlist(state, action) {
            const existingIndex = state.items.findIndex(
                (item) => item._id === action.payload._id && item.size === action.payload.size,
            );

            if (existingIndex >= 0) {
                state.items.splice(existingIndex, 1);
                toast.error('delete');
            }
            state.totalCount -= 1;
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
