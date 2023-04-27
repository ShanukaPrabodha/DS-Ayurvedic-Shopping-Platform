import React from "react";
import SellerDashboard from "./SellerDashboard";

import { SellerProvider } from "../../contexts/SellerContext";

const index = () => {
	return (
		<SellerProvider>
			<SellerDashboard />
		</SellerProvider>
	);
};

export default index;
