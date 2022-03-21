/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: {
        city: null,
        cityPoint: null,
        carModel: {
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
        },
        carColor: null,
        dateStart: null,
        dateEnd: null,
        dateInterval: null,
        selectedRate: null,
        isFullTank: false,
        isChildChair: false,
        isRightHandDrive: false,
        price: 0,
    },
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
        toggleOrderIsFullTank: (state) => {
            state.order.isFullTank = !state.order.isFullTank;
        },
        toggleOrderIsChildChair: (state) => {
            state.order.isChildChair = !state.order.isChildChair;
        },
        toggleOrderIsRightHandDrive: (state) => {
            state.order.isRightHandDrive = !state.order.isRightHandDrive;
        },
        setOrderDateStart: (state, action) => {
            state.order.dateStart = action.payload;
        },
        setOrderDateEnd: (state, action) => {
            state.order.dateEnd = action.payload;
        },
        setOrderDateInterval: (state, action) => {
            state.order.dateInterval = action.payload;
        },
        setOrderPrice: (state, action) => {
            state.order.price = action.payload;
        },
        resetOrderServices: (state) => {
            state.order.isFullTank = false;
            state.order.isChildChair = false;
            state.order.isRightHandDrive = false;
        },
    },
});

export const {
    setOrderCity,
    setOrderCityPoint,
    setOrderCarModel,
    setOrderSelectedRate,
    setOrderCarColor,
    toggleOrderIsFullTank,
    toggleOrderIsChildChair,
    toggleOrderIsRightHandDrive,
    setOrderDateStart,
    setOrderDateEnd,
    setOrderDateInterval,
    setOrderPrice,
    resetOrderServices,
} = OrderSlice.actions;

export default OrderSlice.reducer;