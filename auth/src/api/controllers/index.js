import { registerBuyer, loginBuyer, getBuyerDetails } from "./Buyer.controller";

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
	loginBuyer,
	getBuyerDetails,

	// Admin Auth Controllers
	getAdminDetails,
	loginAdmin,
	registerAdmin,
	editAdminDetails,
	deleteAdmin,
	checkAdmin,
	isLoggedIn,
};
