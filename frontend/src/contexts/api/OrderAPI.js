import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5004";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class OrderAPI {
	// Create new order
	static async createOrder({ stripeUserId, amount, products }) {
		const response = await axios.post(
			`${BASE_URL}/api/order`,
			{
				stripeUserId,
				amount,
				products,
			},
			requestConfigJson
		);
		return response.data;
	}
	// Get one order
	static async getOrder(orderId) {
		const response = await axios.get(`${BASE_URL}/api/order/${orderId}`, requestConfig);
		return response.data;
	}
}

export default OrderAPI;
