import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import carModelSlice from './carModelSlice';
// eslint-disable-next-line import/no-named-as-default
import locationSlice from './locationSlice';
import orderSlice from './orderSlice';

const rootReduser = combineReducers({
    location: locationSlice,
    carModel: carModelSlice,
    order: orderSlice,
});

const store = configureStore({
    reducer: rootReduser,
});

export default store;