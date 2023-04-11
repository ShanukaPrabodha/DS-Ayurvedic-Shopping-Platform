import OrderService from "../services";

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
	await OrderService.getOrder(request.params.orderId)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
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
