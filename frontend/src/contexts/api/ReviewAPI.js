import axios from "axios";

const BASE_URL = "http://localhost:5005";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

class ReviewAPI {
	// Create new order
	static async createSellerReview({ seller_id, review_value, text }) {
		const response = await axios.post(`${BASE_URL}/api/Review/sellerReview/`, {
			seller_id,
			review_value,
			text,
		});
		return response.data;
	}
	// Get one order
	static async getSellerReview(reviewId) {
		const response = await axios.get(`${BASE_URL}/api/Review/sellerReview/${reviewId}`);
		return response.data;
	}

	// Get all seller reviews
	static async getAllSellerReviews() {
		const response = await axios.get(`${BASE_URL}/api/Review/sellerReview/`);
		return response.data;
	}

	// Create new product review
	static async createProductReview({ product_id, review_value, text }) {
		const response = await axios.post(`${BASE_URL}/api/Review/productReview/`, {
			product_id,
			review_value,
			text,
		});
		return response.data;
	}
	// Get one product review
	static async getProductReview(reviewId) {
		const response = await axios.get(`${BASE_URL}/api/Review/productReview/${reviewId}`);
		return response.data;
	}

	// Get all product reviews
	static async getProductReviews() {
		const response = await axios.get(`${BASE_URL}/api/Review/productReview/`);
		return response.data;
	}
}

export default ReviewAPI;
