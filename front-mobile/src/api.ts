import axios from "axios"

const API_URL = 'http://192.168.25.18:8080'
export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export const confirmDelivery = (orderId:number) => {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}