// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import userReducer from './userSlice';
// import productReducer from './productSlice';
// import cartReducer from './cartSlice';
// import wishlistReducer from './wishlistSlice';

// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// };

// const rootReducer = combineReducers({
//     user: userReducer,
//     product: persistReducer(persistConfig, productReducer),
//     cart: persistReducer(persistConfig, cartReducer),

//     wishlist: persistReducer(persistConfig, wishlistReducer),
// });

// export const store = configureStore({
//     reducer: rootReducer,

//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
