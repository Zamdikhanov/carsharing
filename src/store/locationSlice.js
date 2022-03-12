/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';

const initialState = {
    availableCities: [{
        "updatedAt": 0,
        "createdAt": 0,
        "name": "",
        "id": ""
    }],
    availablePoints: [{
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
        setAvailableCities: (state, action) => {
            state.availableCities = action.payload;
        },
        setAvailablePoints: (state, action) => {
            state.availablePoints = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setPoint: (state, action) => {
            state.point = action.payload;
        },
    },
});

export const { setAvailableCities, setAvailablePoints, setCity, setPoint } = locationSlice.actions;

export const getAllLocations = () => async(dispatch) => {
    const responceCity = await orderAPI.getCityList();
    const responcePoint = await orderAPI.getPointList();
    const availablePoints = responcePoint.filter(point => point.cityId);
    const availableCities = responceCity.filter(city => availablePoints.some(point => point.cityId.name === city.name));
    dispatch(setAvailableCities(availableCities));
    dispatch(setAvailablePoints(availablePoints));
};

export default locationSlice.reducer;