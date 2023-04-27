import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5002";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class PaymentAPI {
	// Get all payment methods for a user
	static async getPaymentMethods(customer_Id) {
		const response = await axios.get(`${BASE_URL}/api/payment/get-payment-methods/${customer_Id}`, requestConfig);
		return response.data;
	}
	// Add a new payment method for a user
	static async addNewCard(customer_Id, card_Name, card_Number, card_ExpMonth, card_ExpYear, card_CVC) {
		const response = await axios.post(
			`${BASE_URL}/api/payment/add-card`,
			{
				customer_Id,
				card_Name,
				card_Number,
				card_ExpMonth,
				card_ExpYear,
				card_CVC,
			},
			requestConfigJson
		);

		return response.data;
	}
	// Make a payment
	static async createPaymentIntent(amount, currency, customer_Id, payment_method, orderId) {
		const response = await axios.post(
			`${BASE_URL}/api/payment/make-payment`,
			{
				amount,
				currency,
				customer_Id,
				payment_method,
				orderId,
			},
			requestConfigJson
		);
		return response.data;
	}

	// Get payment details by payment id
	static async getPaymentDetails(payment_Id) {
		const response = await axios.get(`${BASE_URL}/api/payment/get-payment-details/${payment_Id}`, requestConfig);
		return response.data;
	}
}

export default PaymentAPI;
