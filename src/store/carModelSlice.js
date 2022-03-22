/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';
import { setOrderCarModel } from './orderSlice';

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
    carCategory: [{
        id: 'allCarCategory',
        name: 'Все',
    }, ],
    selectedCategoryId: 'allCarCategory',
    selectedCar: {
        updatedAt: null,
        createdAt: null,
        description: null,
        priceMin: 0,
        priceMax: 0,
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
        },
        setCarCategory: (state, action) => {
            state.carCategory = [{
                    id: 'allCarCategory',
                    name: 'Все',
                },
                ...action.payload,
            ];
        },
        setSelectedCategoryId: (state, action) => {
            state.selectedCategoryId = action.payload;
        },
        setSelectedCar: (state, action) => {
            state.selectedCar = action.payload;
        },
    },
});

export const {
    setCars,
    setIsFetching,
    setCarCategory,
    setSelectedCategoryId,
    setSelectedCar,
} = carModelSlice.actions;

export const getCategory = () => async(dispatch) => {
    const responce = await orderAPI.getCategoryList();
    dispatch(setCarCategory(responce));
};

export const getCarsFromCategory = (id) => async(dispatch) => {
    dispatch(setIsFetching(true));
    const responce = await orderAPI.getCarsFromCategory(id);
    dispatch(setCars(responce));
    dispatch(setIsFetching(false));
};

export const getAllCars = () => async(dispatch) => {
    dispatch(setIsFetching(true));
    const responce = await orderAPI.getCategoryList();
    dispatch(setCarCategory(responce));
    const responceCar = await orderAPI.getCarList();
    await dispatch(setCars(responceCar));
    dispatch(setIsFetching(false));
};

export const setCar = (item) => async(dispatch) => {
    dispatch(setSelectedCar(item));
    dispatch(setOrderCarModel(item));
};

export default carModelSlice.reducer;