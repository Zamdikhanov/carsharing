/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';
import {
    setOrderCarColor,
    setOrderDateEnd,
    setOrderDateStart,
    toggleOrderIsChildChair,
    toggleOrderIsFullTank,
    toggleOrderIsRightHandDrive,
    setOrderSelectedRate,
    setOrderDateInterval,
    resetOrderServices,
    setOrderPrice,
} from './orderSlice';
import { setStepTotalIsShow } from './stepDisableSlice';

const initialState = {
    rates: [{
        updatedAt: null,
        createdAt: null,
        price: null,
        rateTypeId: {
            unit: null,
            name: null,
            id: null,
        },
        id: null,
    }, ],
    selectedRate: {
        updatedAt: null,
        createdAt: null,
        price: null,
        rateTypeId: {
            unit: null,
            name: null,
            id: null,
        },
        id: null,
    },
    selectedColor: 'Любой',
    additionalServices: [
        { id: 'isFullTank', name: 'Полный бак', value: false, price: 500 },
        {
            id: 'isNeedChildChair',
            name: 'Детское кресло',
            value: false,
            price: 200,
        },
        { id: 'isRightWheel', name: 'Правый руль', value: false, price: 1600 },
    ],
    selectedStartDate: null,
    selectedEndDate: null,
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
        setSelectedStartDate: (state, action) => {
            state.selectedStartDate = action.payload;
        },
        setSelectedEndDate: (state, action) => {
            state.selectedEndDate = action.payload;
        },
        resetServices: (state) => {
            state.additionalServices = [{
                    id: 'isFullTank',
                    name: 'Полный бак',
                    value: false,
                    price: 500,
                },
                {
                    id: 'isNeedChildChair',
                    name: 'Детское кресло',
                    value: false,
                    price: 200,
                },
                {
                    id: 'isRightWheel',
                    name: 'Правый руль',
                    value: false,
                    price: 1600,
                },
            ];
        },
    },
});

export const {
    setIsFetching,
    setRates,
    setSelectedRate,
    setSelectedColor,
    setServicesValue,
    setSelectedStartDate,
    setSelectedEndDate,
    resetServices,
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

export const setServices = (item) => async(dispatch) => {
    dispatch(setServicesValue(item));
    switch (item) {
        case 0:
            dispatch(toggleOrderIsFullTank());
            break;
        case 1:
            dispatch(toggleOrderIsChildChair());
            break;
        case 2:
            dispatch(toggleOrderIsRightHandDrive());
            break;
        default:
    }
};

export const setMoreStartDate = (item) => async(dispatch) => {
    dispatch(setSelectedStartDate(item));
    dispatch(setOrderDateStart(item));
};

export const setMoreEndDate = (item) => async(dispatch) => {
    dispatch(setSelectedEndDate(item));
    dispatch(setOrderDateEnd(item));
};

export const resetMore = () => async(dispatch) => {
    dispatch(
        setRate({
            updatedAt: null,
            createdAt: null,
            price: null,
            rateTypeId: {
                unit: null,
                name: null,
                id: null,
            },
            id: null,
        }),
    );
    dispatch(setColor(null));
    dispatch(setMoreStartDate(null));
    dispatch(setMoreEndDate(null));
    dispatch(setOrderDateInterval(null));
    dispatch(resetServices());
    dispatch(resetOrderServices());
    dispatch(setOrderPrice(0));
    dispatch(setStepTotalIsShow(false));
};

export default moreSlice.reducer;