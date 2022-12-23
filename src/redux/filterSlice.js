import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        data: {},
        isPending: false,
        error: false,
    },
    reducers: {
        addFilterStart: (state) => {
            state.isPending = true;
            state.error = false;
        },
        addFilterSuccess: (state, action) => {
            state.isPending = false;
            state.data = action.payload;
        },
        addFilterFailure: (state) => {
            state.isPending = false;
            state.error = true;
        },
    },
});

export const { addFilterStart, addFilterSuccess, addFilterFailure } = filterSlice.actions;
export default filterSlice.reducer;
