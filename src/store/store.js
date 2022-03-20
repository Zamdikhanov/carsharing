/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carModelSlice from './carModelSlice';
import locationSlice from './locationSlice';
import moreSlice from './moreSlice';
import orderSlice from './orderSlice';
import stepDisableSlice from './stepDisableSlice';

const rootReduser = combineReducers({
    location: locationSlice,
    carModel: carModelSlice,
    order: orderSlice,
    more: moreSlice,
    step: stepDisableSlice,
});

const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;