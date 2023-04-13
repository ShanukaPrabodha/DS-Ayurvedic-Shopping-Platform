import {insertBuyer} from "./BuyerAuth.service";

import { getAdminDetails, authenticateAdmin, insertAdmin, editAdminDetails, deleteAdmin } from "./Admin.service";

export default {
	// Buyer Auth services

	insertBuyer,


	// Admin Auth services
	getAdminDetails,
	authenticateAdmin,
	insertAdmin,
	editAdminDetails,
	deleteAdmin,

};
