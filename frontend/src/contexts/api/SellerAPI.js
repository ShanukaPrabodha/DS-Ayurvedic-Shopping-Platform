import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5001";

class SellerAPI {
	// Seller Login
	static login(values) {
		return axios.post(`${BASE_URL}/api/auth/seller/login`, values, requestConfigJson);
	}

	// Seller Register
	static register(values) {
		return axios.post(`${BASE_URL}/api/auth/seller/register`, values, requestConfigJson);
	}

	// get one Seller
	static getOneSeller(id) {
		return axios.get(`${BASE_URL}/api/auth/seller/${id}`, requestConfig);
	}

	// get all Sellers
	static getAllSellers() {
		return axios.get(`${BASE_URL}/api/auth/seller/`, requestConfig);
	}

	// update Seller
	static updateSeller(id, values) {
		return axios.put(`${BASE_URL}/api/auth/seller-edit/${id}`, values, requestConfigJson);
	}

	// delete Seller
	static deleteSeller(id) {
		return axios.delete(`${BASE_URL}/api/auth/seller-delete/${id}`, requestConfig);
	}
}

export default SellerAPI;
