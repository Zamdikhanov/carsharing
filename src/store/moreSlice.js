/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';
import { setOrderCarColor, setOrderSelectedRate } from './orderSlice';

const initialState = {
    rates: [{
        updatedAt: null,
        createdAt: null,
        price: null,
        rateTypeId: {
            unit: null,
            name: null,
            id: null
        },
        id: null
    }],
    selectedRate: {
        updatedAt: null,
        createdAt: null,
        price: null,
        rateTypeId: {
            unit: null,
            name: null,
            id: null
        },
        id: null
    },
    selectedColor: 'Любой',
    additionalServices: [
        { id: "isFullTank", name: "Полный бак", value: false, price: 500 },
        { id: "isNeedChildChair", name: "Детское кресло", value: false, price: 200 },
        { id: "isRightWheel", name: "Правый руль", value: false, price: 1600 },
    ],
    isFetching: false,
};

export const moreSlice = createSlice({
    name: 'more',
    initialState,
    reducers: {
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        setRates: (state, action) => {
            state.rates = action.payload;
        },
        setSelectedRate: (state, action) => {
            state.selectedRate = action.payload;
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload;
        },
        setServicesValue: (state, action) => {
            state.additionalServices[action.payload].value = !state.additionalServices[action.payload].value;
        },
    },
});

export const {
    setIsFetching,
    setRates,
    setSelectedRate,
    setSelectedColor,
    setServicesValue,
} = moreSlice.actions;

export const setRate = (item) => async(dispatch) => {
    dispatch(setSelectedRate(item));
    dispatch(setOrderSelectedRate(item));
};

export const getRates = () => async(dispatch) => {
    dispatch(setIsFetching(true));
    const responce = await orderAPI.getRate();
    await dispatch(setRates(responce));
    dispatch(setRate(responce[0]));
    dispatch(setIsFetching(false));
};

export const setColor = (item) => async(dispatch) => {
    dispatch(setSelectedColor(item));
    dispatch(setOrderCarColor(item));
};

export default moreSlice.reducer;