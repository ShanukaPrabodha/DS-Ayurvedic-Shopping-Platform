import axios from "axios";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5001";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class AdminAPI {
	// Admin Login
	static login(values) {
		return axios.post(`${BASE_URL}/api/auth/admin/login`, values, requestConfigJson);
	}

	// Admin Register
	static register(values) {
		return axios.post(`${BASE_URL}/api/auth/admin/register`, values, requestConfigJson);
	}
}

export default AdminAPI;
