/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';

const initialState = {
    city: 'Ульяновск',
    point: '',
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setPoint: (state, action) => {
            state.point = action.payload;
        },
    },
});

export const { setCity, setPoint } = locationSlice.actions;

export const getCityList = () => async(dispatch) => {
    const responce = await orderAPI.getCityList();
    dispatch(console.log('slice ', responce.data));
};

export default locationSlice.reducer;