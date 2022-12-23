import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import filterReducer from './filterSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
        filter: filterReducer,
    },
});
