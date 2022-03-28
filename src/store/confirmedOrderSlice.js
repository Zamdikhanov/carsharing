import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    updatedAt: null,
    createdAt: null,
    orderStatusId: {
        name: null,
        id: null
    },
    cityId: {
        name: null,
        id: null
    },
    pointId: {
        name: null,
        address: null,
        id: null
    },
    carId: {
        name: null,
        number: null,
        thumbnail: {
            path: null,
            mimetype: null,
            originalname: null,
            size: null
        },
        description: null,
        categoryId: {
            name: null,
            description: null,
            id: null
        },
        priceMin: 0,
        priceMax: 0,
        tank: null,
        colors: [
            "Любой",
        ],
        id: null
    },
    color: null,
    dateFrom: null,
    dateTo: null,
    rateId: {
        price: 0,
        rateTypeId: {
            name: null,
            unit: null,
            id: null
        },
        id: null
    }
};

export const confirmedOrderSlice = createSlice({
    name: 'confirmedOrder',
    initialState,
    reducers: {

    },
});

export const {
    setCars,
    setIsFetching,
} = confirmedOrderSlice.actions;

export default confirmedOrderSlice.reducer;