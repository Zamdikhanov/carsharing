/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    location: { isShow: true },
    model: { isShow: false },
    more: { isShow: false },
    total: { isShow: false }
};

export const stepDisableSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStepModelIsShow: (state, action) => {
            state.model.isShow = action.payload;
        },
        setStepMoreIsShow: (state, action) => {
            state.more.isShow = action.payload;
        },
        setStepTotalIsShow: (state, action) => {
            state.total.isShow = action.payload;
        },
    },
});

export const {
    setStepModelIsShow,
    setStepMoreIsShow,
    setStepTotalIsShow,
} = stepDisableSlice.actions;

export default stepDisableSlice.reducer;