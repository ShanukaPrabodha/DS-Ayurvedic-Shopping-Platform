import React from "react";
import BuyerDashboard from "./BuyerDashboard";

import { BuyerProvider } from "../../contexts/BuyerContext";

const index = () => {
	return (
		<BuyerProvider>
			<BuyerDashboard />
		</BuyerProvider>
	);
};

export default index;
