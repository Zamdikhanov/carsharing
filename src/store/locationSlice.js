/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';

const initialState = {
    allCities: [{
        "updatedAt": 0,
        "createdAt": 0,
        "name": "",
        "id": ""
    }],
    allPoints: [{
        "address": "",
        "name": "",
        "cityId": {
            "name": "",
            "id": ""
        },
        "id": ""
    }],
    selectedCity: '',
    selectedPoint: '',
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setAllCities: (state, action) => {
            state.allCities = action.payload;
        },
        setAllPoints: (state, action) => {
            state.allPoints = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setPoint: (state, action) => {
            state.point = action.payload;
        },
    },
});

export const { setAllCities, setAllPoints, setCity, setPoint } = locationSlice.actions;

export const getAllCities = () => async(dispatch) => {
    const responce = await orderAPI.getCityList();
    dispatch(setAllCities(responce));
};

export const getAllPoints = () => async(dispatch) => {
    const responce = await orderAPI.getPointList();
    dispatch(setAllPoints(responce));
};

export default locationSlice.reducer;