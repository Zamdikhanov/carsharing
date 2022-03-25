/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import orderAPI from '../api/api';

const initialState = {
    order: {
        city: null,
        cityPoint: null,
        carModel: {
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
        carColor: null,
        dateStart: null,
        dateEnd: null,
        dateInterval: null,
        selectedRate: null,
        isFullTank: false,
        isChildChair: false,
        isRightHandDrive: false,
        price: 0,
    },
    fullReadyOrder: {
        orderStatusId: { id: '' },
        cityId: { id: '' },
        pointId: { id: '' },
        carId: { id: '' },
        color: '',
        dateFrom: 0,
        dateTo: 0,
        rateId: { id: '' },
        price: 0,
        isFullTank: false,
        isNeedChildChair: false,
        isRightWheel: false,
    },
};

export const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order.city = action.payload.cityId;
            state.order.cityPoint = action.payload.pointId;
            state.order.carModel = action.payload.carId;
            state.order.carColor = action.payload.color;
            state.order.dateStart = action.payload.dateFrom;
            state.order.dateEnd = action.payload.dateTo;
            state.order.selectedRate = action.payload.rateId;
            state.order.isFullTank = action.payload.isFullTank;
            state.order.isChildChair = action.payload.isNeedChildChair;
            state.order.isRightHandDrive = action.payload.isRightWheel;
            state.order.price = action.payload.price;
        },
        setOrderCity: (state, action) => {
            state.order.city = action.payload;
            state.fullReadyOrder.cityId.id = action.payload && action.payload.id;
        },
        setOrderCityPoint: (state, action) => {
            state.order.cityPoint = action.payload;
            state.fullReadyOrder.pointId.id = action.payload && action.payload.id;
        },
        setOrderCarModel: (state, action) => {
            state.order.carModel = action.payload;
            state.fullReadyOrder.carId.id = action.payload && action.payload.id;
        },
        setOrderSelectedRate: (state, action) => {
            state.order.selectedRate = action.payload;
            state.fullReadyOrder.rateId.id = action.payload && action.payload.id;
        },
        setOrderCarColor: (state, action) => {
            state.order.carColor = action.payload;
            state.fullReadyOrder.color = action.payload;
        },
        toggleOrderIsFullTank: (state) => {
            state.order.isFullTank = !state.order.isFullTank;
            state.fullReadyOrder.isFullTank = !state.fullReadyOrder.isFullTank;
        },
        toggleOrderIsChildChair: (state) => {
            state.order.isChildChair = !state.order.isChildChair;
            state.fullReadyOrder.isNeedChildChair = !state.fullReadyOrder.isChildChair;
        },
        toggleOrderIsRightHandDrive: (state) => {
            state.order.isRightHandDrive = !state.order.isRightHandDrive;
            state.fullReadyOrder.isRightWheel = !state.fullReadyOrder.isRightWheel;
        },
        setOrderDateStart: (state, action) => {
            state.order.dateStart = action.payload;
            state.fullReadyOrder.dateFrom = action.payload;
        },
        setOrderDateEnd: (state, action) => {
            state.order.dateEnd = action.payload;
            state.fullReadyOrder.dateTo = action.payload;
        },
        setOrderDateInterval: (state, action) => {
            state.order.dateInterval = action.payload;
        },
        setOrderPrice: (state, action) => {
            state.order.price = action.payload;
            state.fullReadyOrder.price = action.payload;
        },
        resetOrderServices: (state) => {
            state.order.isFullTank = false;
            state.order.isChildChair = false;
            state.order.isRightHandDrive = false;
            state.fullReadyOrder.isFullTank = false;
            state.fullReadyOrder.isNeedChildChair = false;
            state.fullReadyOrder.isRightWheel = false;
        },
        setFullReadyOrderStatusId: (state, action) => {
            state.fullReadyOrder.orderStatusId = action.payload;
        },
    },
});

export const {
    setOrder,
    setOrderCity,
    setOrderCityPoint,
    setOrderCarModel,
    setOrderSelectedRate,
    setOrderCarColor,
    toggleOrderIsFullTank,
    toggleOrderIsChildChair,
    toggleOrderIsRightHandDrive,
    setOrderDateStart,
    setOrderDateEnd,
    setOrderDateInterval,
    setOrderPrice,
    resetOrderServices,
    setFullReadyOrderStatusId,
} = OrderSlice.actions;

export const getOrderStatusId = () => async(dispatch) => {
    const responce = await orderAPI.getOrderStatusId();
    dispatch(setFullReadyOrderStatusId(responce));
};

export const getOrderById = (id) => async(dispatch) => {
    const responce = await orderAPI.getOrder(id);
    dispatch(setOrder(responce));
};

export default OrderSlice.reducer;