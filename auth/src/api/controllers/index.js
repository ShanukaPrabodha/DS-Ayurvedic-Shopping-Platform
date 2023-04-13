import { registerBuyer } from "./Buyer.controller";

import {
	getAdminDetails,
	loginAdmin,
	registerAdmin,
	editAdminDetails,
	deleteAdmin,
	checkAdmin,
	isLoggedIn,
} from "./Admin.controller";

export default {
	// Buyer Auth Controllers
	registerBuyer,

	// Admin Auth Controllers
	getAdminDetails,
	loginAdmin,
	registerAdmin,
	editAdminDetails,
	deleteAdmin,
	checkAdmin,
	isLoggedIn,
};
