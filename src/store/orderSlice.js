/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: {
        city: null,
        cityPoint: null,
        carModel: {
            priceMin: 0,
            priceMax: 0,
            colors: [],
        },
        carColor: null,
        dateStart: null,
        dateEnd: null,
        selectedRate: null,
        isFullTank: false,
        isChildChair: false,
        isRightHandDrive: false,
        price: 0,
    }
};

export const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderCity: (state, action) => {
            state.order.city = action.payload;
        },
        setOrderCityPoint: (state, action) => {
            state.order.cityPoint = action.payload;
        },
        setOrderCarModel: (state, action) => {
            state.order.carModel = action.payload;
        },
        setOrderSelectedRate: (state, action) => {
            state.order.selectedRate = action.payload;
        },
        setOrderCarColor: (state, action) => {
            state.order.carColor = action.payload;
        },
    },
});

export const {
    setOrderCity,
    setOrderCityPoint,
    setOrderCarModel,
    setOrderSelectedRate,
    setOrderCarColor,
} = OrderSlice.actions;


export default OrderSlice.reducer;