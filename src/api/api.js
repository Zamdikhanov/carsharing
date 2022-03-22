import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api/',
    headers: { 'X-Api-Factory-Application-Id': `5e25c641099b810b946c5d5b` },
});

const orderAPI = {
    getCityList() {
        return instance.get(`db/city`).then((response) => response.data.data);
    },
    getPointList() {
        return instance.get(`db/point`).then((response) => response.data.data);
    },
    getCarList() {
        return instance.get(`db/car`).then((response) => response.data.data);
    },
    getRate() {
        return instance.get(`db/rate`).then((response) => response.data.data);
    },
};

export default orderAPI;