import BuyerModel from "../models/Buyer.model";

export const insertBuyer = async (buyer) => {
	return await BuyerModel.create(buyer)
		.then(async (buyer) => {
			await buyer.generateAuthToken();
			return buyer;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
