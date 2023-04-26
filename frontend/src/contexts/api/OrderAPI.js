import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5004";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class OrderAPI {
	// Create new order
	static async createOrder(order) {
		const response = await axios.post(`${BASE_URL}/api/order`, { ...order }, requestConfigJson);
		return response.data;
	}
	// Get one order
	static async getOrder(orderId) {
		const response = await axios.get(`${BASE_URL}/api/order/${orderId}`, requestConfig);
		return response.data;
	}

	// Get all orders
	static async getOrders() {
		const response = await axios.get(`${BASE_URL}/api/order`, requestConfig);
		return response.data;
	}

	// changeOrderStatus
	static async changeOrderStatus(orderId, status) {
		const response = await axios.patch(`${BASE_URL}/api/order/status/${orderId}`, { status }, requestConfigJson);
		return response.data;
	}
}

export default OrderAPI;
