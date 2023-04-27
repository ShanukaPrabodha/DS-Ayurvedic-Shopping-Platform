import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5001";

class BuyerAPI {
	// Buyer Login
	static login(values) {
		return axios.post(`${BASE_URL}/api/auth/buyer/login`, values, requestConfigJson);
	}

	// Buyer Register
	static register(values) {
		return axios.post(`${BASE_URL}/api/auth/buyer/register`, values, requestConfigJson);
	}

	// get one Buyer
	static getOneBuyer(id) {
		return axios.get(`${BASE_URL}/api/auth/buyer/${id}`, requestConfig);
	}

	// get all Buyers
	static getAllBuyers() {
		return axios.get(`${BASE_URL}/api/auth/buyer/`, requestConfig);
	}

	// update Buyer
	static updateBuyer(id, values) {
		return axios.put(`${BASE_URL}/api/auth/buyer-edit/${id}`, values, requestConfigJson);
	}

	// delete Buyer
	static deleteBuyer(id) {
		return axios.delete(`${BASE_URL}/api/auth/buyer-delete/${id}`, requestConfig);
	}
}

export default BuyerAPI;
