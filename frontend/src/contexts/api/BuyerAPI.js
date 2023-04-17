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
}

export default BuyerAPI;
