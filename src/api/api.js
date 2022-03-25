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
    getCategoryList() {
        return instance
            .get(`db/category`)
            .then((response) => response.data.data);
    },
    getCarList() {
        return instance
            .get(`db/car?page=1&limit=20`)
            .then((response) => response.data.data);
    },
    getCarsFromCategory(id) {
        return instance
            .get(`db/car?categoryId=${id}`)
            .then((response) => response.data.data);
    },
    getRate() {
        return instance.get(`db/rate`).then((response) => response.data.data);
    },
    getOrderStatusId() {
        return instance.get(`/db/orderStatus`).
        then((response) => response.data.data[0]);
    },
    postOrder(order) {
        return instance
            .post(`/db/order`, order)
            .then((response) => response.data.data);
    },
    getOrder(id) {
        return instance.get(`/db/order/${id}`).
        then((response) => response.data.data);
    },
};

export default orderAPI;