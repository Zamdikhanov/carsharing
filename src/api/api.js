import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api/',
    headers: { 'X-Api-Factory-Application-Id:': `5e25c641099b810b946c5d5b` }
});

const orderAPI = {
    getCity() {
        return (
            instance.get(`db/city`)
            .then(
                response => response.data
            )
        )
    }
}

export default orderAPI;