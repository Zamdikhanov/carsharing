/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';

const initialState = {
    cars: [{
        updatedAt: null,
        createdAt: null,
        description: null,
        priceMin: null,
        priceMax: null,
        name: null,
        number: null,
        categoryId: {
            name: null,
            description: null,
            id: null,
        },
        thumbnail: {
            mimetype: null,
            originalname: null,
            size: null,
            path: null,
        },
        colors: [],
        id: null,
    }, ],
    isFetching: false,
};

export const carModelSlice = createSlice({
    name: 'carModel',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    },
});

export const { setCars, setIsFetching } = carModelSlice.actions;

export const getCars = () => async(dispatch) => {
    dispatch(setIsFetching(true));
    const responce = await orderAPI.getCarList();
    dispatch(setCars(responce));
    dispatch(setIsFetching(false));
};

export default carModelSlice.reducer;