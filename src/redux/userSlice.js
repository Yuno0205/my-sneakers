import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        displayName: 'Customer',
        image: 'https://cdn-icons-png.flaticon.com/512/2948/2948035.png',
    },
    reducers: {
        getCurrentUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.image = action.payload.image;
        },
    },
});

export const { getCurrentUser } = userSlice.actions;
export default userSlice.reducer;
