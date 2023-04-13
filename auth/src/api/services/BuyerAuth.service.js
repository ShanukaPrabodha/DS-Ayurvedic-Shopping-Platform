import BuyerAuthModel from "../models/BuyerAuth.model";

// TODO: Login Service

export const insertBuyer = async (buyer) => {
	return await BuyerAuthModel.create(buyer)
		.then(async (buyer) => {
			await buyer.generateAuthToken();
			return buyer;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};