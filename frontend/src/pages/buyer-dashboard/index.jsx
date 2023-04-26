import React from "react";
import BuyerDashboard from "./BuyerDashboard";

import { BuyerProvider } from "../../contexts/BuyerContext";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<OrderProvider>
		<BuyerProvider>
			<BuyerDashboard />
		</BuyerProvider>
		</OrderProvider>
	);
};

export default index;
