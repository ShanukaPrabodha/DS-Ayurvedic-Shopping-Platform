import SellerService from "../services";
import SellerModel from "../models/Seller.model";
import logger from "../../util/logger";
import configs from "../../config";
import axios from "axios";

// Seller Register Controller
export const registerSeller = async (request, response, next) => {
	if (await SellerModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else if (await SellerModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC already Exists");
		next();
	} else {
		// Generate stripe user id using payment service
		const stripeUser = await axios.post(`${configs.payment_service}/api/payment/create-customer`, {
			name: request.body.name,
			email: request.body.email,
		});

		const Seller = {
			stripeUserId: stripeUser.data.id,
			name: request.body.name,
			email: request.body.email,
			contact: request.body.contact,
			nic: request.body.nic,
			address: request.body.address,
			password: request.body.password,
		};

		await SellerService.insertSeller(Seller)
			.then((data) => {
				logger.info(`New Buyer with ID ${data._id} created`);
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};
