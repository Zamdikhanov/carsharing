/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carModelSlice from './carModelSlice';
import locationSlice from './locationSlice';
import moreSlice from './moreSlice';
import orderSlice from './orderSlice';

const rootReduser = combineReducers({
    location: locationSlice,
    carModel: carModelSlice,
    order: orderSlice,
    more: moreSlice,
});

const store = configureStore({
    reducer: rootReduser,
});

export default store;