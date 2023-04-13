import { insertBuyer, authenticateBuyer, getBuyerDetails, getAllBuyers, editBuyerDetails, deleteBuyer } from "./Buyer.service";

import { getAdminDetails, authenticateAdmin, insertAdmin, editAdminDetails, deleteAdmin } from "./Admin.service";

export default {
	// Buyer Auth services
	insertBuyer,
	authenticateBuyer,
	getBuyerDetails,
	getAllBuyers,
	editBuyerDetails,
	deleteBuyer,
	

	// Admin Auth services
	getAdminDetails,
	authenticateAdmin,
	insertAdmin,
	editAdminDetails,
	deleteAdmin,
};
