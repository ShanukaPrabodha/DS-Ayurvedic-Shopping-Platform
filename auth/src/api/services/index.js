import { insertBuyer, authenticateBuyer, getBuyerDetails } from "./Buyer.service";

import { getAdminDetails, authenticateAdmin, insertAdmin, editAdminDetails, deleteAdmin } from "./Admin.service";

export default {
	// Buyer Auth services
	insertBuyer,
	authenticateBuyer,
	getBuyerDetails,

	// Admin Auth services
	getAdminDetails,
	authenticateAdmin,
	insertAdmin,
	editAdminDetails,
	deleteAdmin,
};
