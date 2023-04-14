import OrderService from "../services";
// import axios from "axios";
// import configs from "../../config";
import { checkUserLoggedIn } from "../middleware/Auth.middleware";

// Add one order
export const addOrder = async (request, response, next) => {
	await OrderService.addOrder(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// TODO: Get all orders

// Get one order
export const getOrder = async (request, response, next) => {
	try {
		// Check if the user is logged in
		const isLoggedIn = await checkUserLoggedIn(request.headers.authorization);

		if (!isLoggedIn) {
			// Handle case where user is not logged in
			return request.handleResponse.errorRespond(response)("User not logged in");
		}

		await OrderService.getOrder(request.params.orderId).then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		});
	} catch (error) {
		request.handleResponse.errorRespond(response)(error.response?.data?.details || error.message);
	}
};

// changeOrderIsPaidStatus
export const changeOrderIsPaidStatus = async (request, response, next) => {
	await OrderService.changeOrderIsPaidStatus(request.params.orderId, request.body.isPaid)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// TODO: Update a order
// TODO: Delete a order
