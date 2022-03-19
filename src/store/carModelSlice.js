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
    carCategory: [{
        id: 'allCarCategory',
        name: 'Все',
    }, ],
    selectedCategoryId: 'allCarCategory',
    selectedCar: {
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
        setCarCategory: (state) => {
            const carCategory = state.cars.reduce(
                (acc, car) => {
                    const hasCategoryInAcc = acc.some(
                        (category) => category.id === car.categoryId.id,
                    );
                    if (car.categoryId && !hasCategoryInAcc) {
                        acc.push({
                            id: car.categoryId.id,
                            name: car.categoryId.name,
                        });
                    }
                    return acc;
                }, [{
                    id: 'allCarCategory',
                    name: 'Все',
                }, ],
            );
            state.carCategory = carCategory;
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

export const getCars = () => async(dispatch) => {
    dispatch(setIsFetching(true));
    const responce = await orderAPI.getCarList();
    await dispatch(setCars(responce));
    await dispatch(setCarCategory());
    dispatch(setIsFetching(false));
};

export default carModelSlice.reducer;