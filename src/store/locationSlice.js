/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';
import { setOrderCity, setOrderCityPoint } from './orderSlice';
import { setStepModelIsShow } from './stepDisableSlice';
import { resetCarModel } from './carModelSlice';

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
    availablePointsInSelectedCity: [{
        "address": "",
        "name": "",
        "cityId": {
            "name": "",
            "id": ""
        },
        "id": ""
    }],
    selectedCity: null,
    selectedPoint: null,
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
        setSelectedCity: (state, action) => {
            state.selectedCity = action.payload;
            state.availablePointsInSelectedCity = state.availablePoints.filter(
                (availablePoint) =>
                availablePoint.cityId.name === state.selectedCity,
            );
        },
        setSelectedPoint: (state, action) => {
            state.selectedPoint = action.payload;
        },
    },
});

export const { setAvailableCities, setAvailablePoints, setSelectedCity, setSelectedPoint } = locationSlice.actions;

export const getAllLocations = () => async(dispatch) => {
    const responceCity = await orderAPI.getCityList();
    const responcePoint = await orderAPI.getPointList();
    const availablePoints = responcePoint.filter(point => point.cityId);
    const availableCities = responceCity.filter(city => availablePoints.some(point => point.cityId.name === city.name));
    dispatch(setAvailableCities(availableCities));
    dispatch(setAvailablePoints(availablePoints));
};
export const setCity = (point) => async(dispatch) => {
    dispatch(setSelectedCity(point));
    dispatch(setOrderCity(point));
}
export const setPoint = (point) => async(dispatch) => {
    dispatch(setSelectedPoint(point));
    dispatch(setOrderCityPoint(point));
    if (point) { dispatch(setStepModelIsShow(true)) } else {
        dispatch(setStepModelIsShow(false));
        dispatch(resetCarModel());
    }
}

export default locationSlice.reducer;