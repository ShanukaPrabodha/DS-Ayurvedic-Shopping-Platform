import SellerModel from "../models/Seller.model";

//Insert Seller
export const insertSeller = async (seller) => {
	return await SellerModel.create(seller)
		.then(async (seller) => {
			await seller.generateAuthToken();
			return seller;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
