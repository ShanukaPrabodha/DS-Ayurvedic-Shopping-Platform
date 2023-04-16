import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = "http://localhost:5003";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class ProductAPI {
	// Get all products
	static getProducts() {
		return axios.get(`${BASE_URL}/api/product/product/`, requestConfig);
	}

	// Add a product
	static createProduct(newProduct) {
		return axios.post(`${BASE_URL}/api/product/product/`, newProduct, requestConfigJson);
	}

	//Get one Product

	static getOneProduct(id) {
		return axios.get(`${BASE_URL}/api/product/product/${id}`, requestConfigJson);
	}

	//Edit Product

	static editProduct(id, newProduct) {
		return axios.put(`${BASE_URL}/api/product/product/${id}`, newProduct, requestConfigJson);
	}

	//Delete Product

	static deleteProduct(id) {
		return axios.delete(`${BASE_URL}/api/product/product/${id}`, requestConfig);
	}
}

export default ProductAPI;
