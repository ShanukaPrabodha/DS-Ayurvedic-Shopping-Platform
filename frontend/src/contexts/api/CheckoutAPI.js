import axios from "axios";

const BASE_URL = "http://localhost:5004";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class CheckoutAPI {
	// Create new order
	static async createOrder({ userId, amount, products }) {
		const response = await axios.post(`${BASE_URL}/api/order`, {
			userId,
			amount,
			products,
		});
		return response.data;
	}
	// Get one order
	static async getOrder(orderId) {
		const response = await axios.get(`${BASE_URL}/api/order/${orderId}`);
		return response.data;
	}
}

export default CheckoutAPI;
