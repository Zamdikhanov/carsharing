/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: {
        city: null,
        cityPoint: null,
        carModel: null,
        carColor: null,
        dateStart: null,
        dateEnd: null,
        selectedRate: null,
        isFullTank: false,
        isChildChair: false,
        isRightHandDrive: false,
        priceMin: 0,
        priceMax: 0,
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
    },
});

export const {
    setOrderCity,
    setOrderCityPoint,
    setOrderCarModel,
} = OrderSlice.actions;


export default OrderSlice.reducer;