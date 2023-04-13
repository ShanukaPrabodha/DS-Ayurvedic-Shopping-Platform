import BuyerAuthService from "../services";
import BuyerAuthModel from "../models/BuyerAuth.model";
import logger from "../../util/logger";

// TODO: Login Controller
// TODO: Signup Controller

// Tour Guide Register
export const registerBuyer = async (request, response, next) => {
	if (await BuyerAuthModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else if (await BuyerAuthModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC already Exists");
		next();
	} else {
		const Buyer = {
			name: request.body.name,
			email: request.body.email,
			contact: request.body.contact,
			nic: request.body.nic,
			address: request.body.address,
			password: request.body.password,
			permissionLevel: "BUYER",
		};

		await BuyerAuthService.insertBuyer(Buyer)
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
