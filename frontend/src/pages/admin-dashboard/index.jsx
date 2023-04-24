import React from "react";
import AdminDashboard from "./AdminDashboard";

import { AdminProvider } from "../../contexts/AdminContext";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<AdminProvider>
			<OrderProvider>
				<AdminDashboard />
			</OrderProvider>
		</AdminProvider>
	);
};

export default index;
