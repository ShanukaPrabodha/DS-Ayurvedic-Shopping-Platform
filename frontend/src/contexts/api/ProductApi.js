import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5003/api/product";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class ProductAPI {
	// Get all products
	static getProducts() {
		return axios.get(`${BASE_URL}/product/`, requestConfig);
	}

	// Add a new hotel package
	static createProduct(newCampingPackage) {
		return axios.post(`${BASE_URL}/product/`, newCampingPackage, requestConfigJson);
	}

	//Get one Camping Package

	static getOneProduct(id) {
		return axios.get(`${BASE_URL}/product/${id}`, requestConfigJson);
	}

	//Edit Camping Package

	static editProduct(id, newCampingPackage) {
		return axios.put(`${BASE_URL}/product/${id}`, newCampingPackage, requestConfigJson);
	}

	//Delete Camping Package

	static deleteProduct(id) {
		return axios.delete(`${BASE_URL}/cproduct/${id}`, requestConfig);
	}
}

export default ProductAPI;
