import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import locationSlice from './locationSlice';

const rootReduser = combineReducers({
    location: locationSlice,
});

const store = configureStore({
    reducer: rootReduser,
});

export default store;