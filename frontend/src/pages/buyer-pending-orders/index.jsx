import React from "react";
import BuyerPendingOrders from "./BuyerPendingOrders";

import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<BuyerPendingOrders />
			</OrderProvider>
		</>
	);
};

export default index;
